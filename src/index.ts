import express from  'express'
import genericErrorHandler from './errors/genericErrorHandler'

const app = express()

app.use(genericErrorHandler)