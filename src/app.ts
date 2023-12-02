import server from "@/index"
import dotenv from "dotenv"
dotenv.config()
const port: number = parseInt(process.env.PORT || "3333", 10)
try {
  server.listen(3333, () => {
    console.log(`Server running at port: ${port}`)
  })
} catch (error) {
  console.error(error)
}
