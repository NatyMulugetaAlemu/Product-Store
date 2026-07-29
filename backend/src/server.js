import express from "express"

import dotenv from "dotenv"
import cors from 'cors'
dotenv.config()
import productRoutes from "./routes/productRoutes.js"
import { initDB, sql } from "./config/db.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())



app.use("/api/products", productRoutes)

app.get("/test",(req,res)=>{
    res.send("Hello")
})



initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
});

