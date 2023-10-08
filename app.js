import cors from 'cors'
import express from "express";
import { PORT } from './configs/index.js'
import connectToDb from "./configs/db.js";
import Router from './routes/index.js'
const App = express()

connectToDb()
App.use(express.json())
App.use(cors('*'))
App.use('/', Router)

App.listen(PORT, () => {
    console.log(`Server is Running in port ${PORT}`)
})