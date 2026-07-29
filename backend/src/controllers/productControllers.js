import { sql } from "../config/db.js"

export const getProducts = async (req, res) => {
    try {
        const products = await sql`
    SELECT * FROM products
    ORDER BY created_at DESC 
    `
        if (products.length === 0) {
            return res.status(404).json({ success: false, message: "Product Not Found" })
        }
        res.status(200).json({ success: true, data: products })
    } catch (error) {
        console.log("Error in getProducts Controller", error)
        res.status(500).json({ success: false, message: error.message })

    }
}

export const createProduct = async (req, res) => {

    try {
        const { name, price, image } = req.body
        if (!name || !price || !image) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }

        const newProduct = await sql`
           INSERT INTO products(name,price,image)
           VALUES (${name},${price},${image})
           RETURNING *
        `

        console.log(newProduct)
        res.status(201).json({ success: true, data: newProduct[0] })


    } catch (error) {
        console.log("Error in createProduct Controller", error)
        res.status(500).json({ success: false, message: error.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await sql`
   SELECT * FROM products WHERE id=${id}
`

        if (product.length === 0) {
            return res.status(404).json({ success: false, message: "Product Not Found" })
        }
        res.status(200).json({ success: true, data: product[0] })
    } catch (error) {
        console.log("Error in getProductById Controller", error)
        res.status(500).json({ success: false, message: error.message })
    }

}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const { name, price, image } = req.body

        const updatedProduct = await sql`
       UPDATE products 
       SET name=${name},price=${price},image=${image}
       WHERE id=${id}
       RETURNING *
     `

        if (updatedProduct.length === 0) {
            return res.status(404).json({ success: false, message: "Product Not Found" })
        }
        res.status(200).json({ success: true, data: updatedProduct[0] })
    } catch (error) {
        console.log("Error in updateProduct Controller", error)
        res.status(500).json({ success: false, message: error.message })
    }

}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params

        const deletedProduct = await sql`
      DELETE FROM products WHERE id=${id}  RETURNING *
    `

        if (deletedProduct.length === 0) {
            return res.status(404).json({ success: false, message: "Product Not Found" })
        }

        res.status(200).json({ success: true, data: deletedProduct })
    } catch (error) {
        console.log("Error in deleteProduct Controller", error)
        res.status(500).json({ success: false, message: error.message })
    }
}