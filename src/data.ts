import { graphql } from './gql'
import { request } from 'graphql-request'
import { StatusEnum, UserRateStatusEnum, UserRateTargetTypeEnum } from './gql/graphql'

const GetAnimesInList = graphql(`
  query GetAnimesInList($targetType: UserRateTargetTypeEnum!, $userId: ID, $limit: Int, $page: Int){
    userRates(targetType: $targetType, userId: $userId, limit: $limit, page: $page) {
      episodes
      anime {
        status
        name
        episodesAired
        episodes
        duration
      }
      status
    }
  }
`)

const INITIAL_PLANNED = 124433
const INITIAL_WATCHED = 179393
const INITIAL_TOTAL = INITIAL_WATCHED + INITIAL_PLANNED

export async function getData() {
    const res = {
        initial: INITIAL_PLANNED,
        expansion: -INITIAL_TOTAL,
        watched: -INITIAL_WATCHED,
        left: 0
    }

    let page = 1
    while (true) {
        const data = await request('https://shikimori.one/api/graphql', GetAnimesInList, {
            targetType: UserRateTargetTypeEnum.Anime,
            userId: 494411 as any, // Typing error
            limit: 50,
            page
        })
        if (data.userRates.length <= 0) break

        for (const rate of data.userRates) {
            if (!rate.anime || !rate.anime.duration) continue
            const episodesReleased = rate.anime.status == StatusEnum.Released ? rate.anime.episodes : rate.anime.episodesAired
            const episodesWatched = rate.episodes
            const minutesTotal = episodesReleased * rate.anime.duration
            const minutesWatched = episodesWatched * rate.anime.duration
            const minutesLeft = (episodesReleased - episodesWatched) * rate.anime.duration
            
            res.expansion += minutesTotal
            res.watched += minutesWatched
            res.left += minutesLeft
        }

        await delay(100)
        page++
    }
    return res
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}