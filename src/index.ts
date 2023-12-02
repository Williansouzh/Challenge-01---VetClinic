import express from "express"
import tutorsRouter from "./routes/tutorsRoute"
import path from "path"
import cors from "cors"
const server = express()
server.use(cors())
server.use("/public", express.static(path.join(__dirname, "../public")))
server.use(tutorsRouter)
export default server
