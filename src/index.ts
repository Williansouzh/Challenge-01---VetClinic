import bodyParser from 'body-parser'
import express from 'express'
import dotenv from 'dotenv'
import router from './routes/tutorsRoute'
import connectToMongoDB from './connection/mongodb'
dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)

const start = async () => {
  try {
    await connectToMongoDB()

    app.listen(3333, () => console.log('Server running at port 3333'))
  } catch (error) {
    console.log('Error at database connection')
  }
}
start()
