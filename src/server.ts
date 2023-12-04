import dotenv from "dotenv"
import app from "@/app"
import prisma from "./connection/mongoDb"
dotenv.config()

const PORT = process.env.PORT

async function connect() {
  try {
    await prisma.$connect().then(() => {
      app.listen(PORT, () => {
        console.log(`Server running at port: ${PORT}`)
      })
    })
  } catch (error) {
    console.log("Error connecting to MongoDB:", error)
    process.exit(1)
  }
}
export default connect
