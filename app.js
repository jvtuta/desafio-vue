import core from "./bootstrap/core.js"
import express from 'express'
import bodyParser from "body-parser"
import cors from 'cors'

const options = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

const app = express()

app.use(cors(options))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

core(app)

