import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js';


const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
connectDB()

app.use('/api/auth', authRoutes)

app.listen(process.env.PORT,()=>{
  console.log(`the server is running on: http://localhost:${process.env.PORT}`)
})