const Product = require('../models/Product')

module.exports = class ProductController {
    static async create(req, res){
        
        const { nome, nota, preco, categoria, marca } = req.body

        const images = req.files

        const  available = true


        if(!nome){
            res.status(422).json({message: "O nome é obrigatório!"})
            return
        }

        if(!categoria){
            res.status(422).json({message: "A categoria é obrigatório!"})
            return
        }

        if(!preco){
            res.status(422).json({message: "O preço é obrigatório!"})
            return
        }

        if(!marca){
            res.status(422).json({message: "A marca é obrigatório!"})
            return
        }

        // if(images.length === 0){
        //     res.status(422).json({message: "A imagem é obrigatório!"})
        //     return
        // }

        const product = new Product({
            nome,
            nota,
            categoria,
            preco,
            marca,
            image: ""
        })

        // images.map((image) => {
        //     product.images.push(image.filenome)
        // })

        try {
            
            const newProduct = await product.save()
            res.status(201).json({
                message: 'Produto cadstrado com sucesso!',
                newProduct,
            })

        } catch (error) {
            res.status(500).json({message: error})
        }
    }

    static async removeProductByID(req, res) {
        const id = req.params.id

        if (!isObjectIdOrHexString.isValid(id)) {
            res.status(422).json({ message: 'ID Inválido' })
            return
        }
    }

    static async getProducts(req, res) {
        const products = await Product.find({}).lean()
        res.status(200).json(products)
    }
}