import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProductById } from "../controllers/productControllers.js"

const router=express.Router()

router.get("/",getAllProducts)

router.post("/",createProduct)

router.get("/:id",getProductById)

router.delete("/",deleteProduct)

export default router