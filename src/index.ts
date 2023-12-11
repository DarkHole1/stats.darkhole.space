import express from 'express'
import { resolve } from 'path'
import { getData } from './data'
import cron from 'node-cron'
import debug from 'debug'

const log = debug('app:main')

getData().then(d => {
    log('Initial data fetched')
    let data = d

    const app = express()
    
    app.set('view engine', 'pug')
    
    app.get('/', async (_req, res) => {
        return res.render('main', data)
    })
    
    app.use(express.static(resolve(__dirname, '../static')))
    
    cron.schedule('0 0 0,12 * * *', async () => {
        data = await getData()
    })

    app.listen(8089, () => {
        log('Started server on port 8089')
    })
})
