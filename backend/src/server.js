import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import dotenv from "dotenv"
dotenv.config()
import productRoutes from "./routes/productRoutes.js"
import { sql } from "./config/db.js"

const app=express()
const PORT=process.env.PORT || 3000

app.use(express.json())
// app.use(cors())
app.use(helmet())
app.use(morgan("dev"))


app.use("/api/products",productRoutes)

async function initDB(){
    try {
        await sql
    } catch (error) {
       console.log("Error initializing D.B",error) 
    }
}

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT}`)
})