import express from "express"
import { createProduct, deleteProduct, getProducts, getProductById, updateProduct } from "../controllers/productControllers.js"

const router=express.Router()

router.get("/",getProducts)

router.post("/",createProduct)

router.get("/:id",getProductById)

router.put("/:id",updateProduct)

router.delete("/:id",deleteProduct)

export default router