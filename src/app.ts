import express from "express"
import dotenv from "dotenv"
import connect from "./server"
import tutorRouter from "@/routes/tutorsRoute"
dotenv.config()

const app = express()
app.use(express.json())
app.use(tutorRouter)
connect()

export default app
