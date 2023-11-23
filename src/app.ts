import express from "express";
import dotenv from "dotenv"
dotenv.config()
const app = express();


const port: number = parseInt(process.env.PORT || '3000', 10);
const start = async()=>{
    try {
        app.listen(port, ()=>console.log(`Server running at port: ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()