const express = require('express')
const { config } = require('./config')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(config.port, (err) => {
    if(err) console.log(err)
    else console.log(`Listening on http://localhost:${config.port}`)
})
