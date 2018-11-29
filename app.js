import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'

// Config
import { PORT } from './config'

// HTTP Config
const app = express()
const serve = http.createServer(app)

// Config bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Serve
serve.listen(PORT,  () => console.log(`Server listen in http://localhost:${PORT}`))
