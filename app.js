import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import logger from 'morgan'

// Config
import { PORT, ENVIROMENT } from './config'

// Routes
import Routes from './routes'

// HTTP Config
const app = express()
const serve = http.createServer(app)

// Config bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Logger
if (ENVIROMENT === 'development')
    app.use(logger())

// Routes
app.use('/api', Routes)

// Serve
serve.listen(PORT,  () => console.log(`Server listen in http://localhost:${PORT}`))
