window.addEventListener('load', async () => {
    const res = await fetch('/api/planned.json')
    const json = await res.json()
    const current = json.at(-1)

    const plannedChart = c3.generate({
        bindto: '#planned',
        data: {
            columns: [
                ['Просмотрено', current.watched * 100 / (current.initial + current.expansion)]
            ],
            type: 'gauge'
        }
    })

    const progressChart = c3.generate({
        bindto: '#progress',
        type: 'step',
        data: {
            json,
            x: 'date',
            xFormat: '%Y-%m-%dT%H:%M:%S.%fZ',
            keys: {
                x: 'date',
                value: ['watched', 'expansion']
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    count: 10,
                    format: '%Y-%m-%d'
                }
            },
            y: {
                label: {
                    text: 'Время, минут',
                    position: 'outer-middle'
                }
            }
        },
        grid: {
            x: { show: true },
            y: { show: true }
        }
    })
})