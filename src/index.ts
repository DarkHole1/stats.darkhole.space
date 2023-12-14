import express from 'express'
import { resolve } from 'path'
import { getData } from './data'
import cron from 'node-cron'
import debug from 'debug'
import { readFileSync } from 'fs'
import { readModelSync, writeModel } from './models'
import { PlannedArray } from './models/planned'

const log = debug('app:main')

const history = readModelSync(PlannedArray, 'data/planned.json')

getData().then(d => {
    log('Initial data fetched')
    let data = d

    const app = express()

    app.set('view engine', 'pug')

    app.get('/', async (_req, res) => {
        return res.render('main', data)
    })

    app.use(express.static(resolve(__dirname, '../static')))

    cron.schedule('0 0 * * * *', async () => {
        log('Getting data')
        data = await getData()
        history.push({
            date: new Date(),
            ...data
        })
        log('Adding data to history')
        await writeModel(history, 'data/planned.json')
    })

    app.listen(8089, () => {
        log('Started server on port 8089')
    })
})
