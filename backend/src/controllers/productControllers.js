import { sql } from "../config/db.js"

export const getProducts = async (req, res) => {
    try {
        const products = await sql`
    SELECT * FROM products
    ORDER BY created_at DESC 
    `
        console.log(products)
        res.status(200).json({ sucess: true, data: products })
    } catch (error) {
        console.log("Error in getProducts Controller",error)
        res.status(500).json({ sucess: false,message:error.message })

    }
}

export const createProduct = async (req, res) => {

    try {
        const { name, price, image } = req.body
        if (!name || !price || !image) {
            return res.status(400).json({ sucess: false, message: "All fields are required" })
        }
 
        const newProduct=await sql`
           INSERT INTO products(name,price,IMAGE)
           VALUES (${name},${price},${imag})
           RETURNING *
        `

        console.log(newProduct)
        res.ststus(201).json({sucess:true,data:newProduct[0]})


    } catch (error) {
        console.log("Error in createProduct Controller",error)
        res.status(500).json({ sucess: false,message:error.message })
    }
}

export const getProductById = async (req, res) => {

}

export const updateProduct = async (req, res) => {

}

export const deleteProduct = async (req, res) => {

}