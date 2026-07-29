import { sql } from "../config/db.js"

export const getProducts=async(req,res)=>{
   try {
   const products= await sql`
    SELECT * FROM products
    ORDER BY created_at DESC 
    `
     console.log(products)
    res.status(200).json({sucess:true,data:products})
   } catch (error) {
    
   }
}

export const createProduct=async(req,res)=>{
    const {name,price,image}=req.body
   try {
    
   } catch (error) {
    
   }
}

export const getProductById=async(req,res)=>{

}

export const updateProduct=async(req,res)=>{

}

export const deleteProduct=async(req,res)=>{

}