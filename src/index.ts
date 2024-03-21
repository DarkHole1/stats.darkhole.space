import express from 'express'
import { resolve } from 'path'
import { getData } from './data'
import cron from 'node-cron'
import debug from 'debug'
import { readFileSync } from 'fs'
import { readModelSync, writeModel } from './models'
import { PlannedArray } from './models/planned'

const log = debug('app:main')

const PLANNED_PATH = resolve(__dirname, '../data/planned.json')
const history = readModelSync(PlannedArray, PLANNED_PATH)

getData().then(d => {
    log('Initial data fetched')
    let data = d

    const app = express()

    app.set('view engine', 'pug')

    app.get('/', async (_req, res) => {
        return res.render('main', data)
    })

    app.get('/api/planned.json', (_, res) => {
        return res.sendFile(PLANNED_PATH)
    })

    app.use(express.static(resolve(__dirname, '../static')))

    cron.schedule('0 0 0,12 * * *', async () => {
        log('Getting data')
        data = await getData()
        history.push({
            date: new Date(),
            ...data
        })
        log('Adding data to history')
        await writeModel(history, PLANNED_PATH)
    })

    app.listen(8089, () => {
        log('Started server on port 8089')
    })
})
