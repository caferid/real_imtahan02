import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { router } from './src/router/proRouter.js'


const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const port = 3000


app.use("/",router)

mongoose.connect("mongodb+srv://feridd:feridd@cluster0.o4zo8na.mongodb.net/")
.then(()=>console.log("DB Connet"))
.catch(()=>console.log("NOT db connet"))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})