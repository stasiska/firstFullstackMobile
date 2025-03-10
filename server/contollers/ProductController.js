const ApiError = require('../error/ApiError');
const { Product } = require('../models/index');
const uuid = require('uuid');
const path = require("path");
const { unlink } = require('fs');

class ProductController {

    async createProduct(req, res, next) {
        try {
            const { name, type, price, description } = req.body;

            if (!req.files || !req.files.image) {
                return next(ApiError.badRequest("Файл изображения не загружен"));
            }

            const { image } = req.files;
            let fileName = uuid.v4() + '.jpg';
            const staticPath = path.resolve(__dirname, "..", "static");

            const filePath = path.join(staticPath, fileName);
            await image.mv(filePath);

            const item = await Product.create({ name, type, price, description, image: fileName });
            return res.json(item);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAllProduct(req,res,next){
        let {limit, page,type} = req.query
        page = page || 1
        limit = limit || 2


        let offset = page * limit - limit
        let products;

        if (type) {
            products = await Product.findAndCountAll({where: type}, limit, offset)
        }else{ 
            products = await Product.findAndCountAll({limit, offset})
        }

        
        //const products = await Product.findAll()

        return res.json(products)
    }

    async getOneProduct(req,res,next){
        const { id } = req.params
        const product = await Product.findOne({where: {id}})
        if (!product) {
            next(ApiError.badRequest('Продукт не найден'))
        }
        res.json(product)
    }

    async deleteProduct(req,res,next){
        try {
            const { id } = req.params;
           
            const product = await Product.findOne({where:{id}})
            if (!product) {
                next(ApiError.badRequest('Продукт не найден'))
            }
            unlink(
                path.resolve(__dirname,'..', 'static', product.image),
                (error) => {
                    if (error) throw error
                }
            )

            await Product.destroy({where: {id}})
            return res.json({message: 'Delete successfuly'})
        }catch(e){
            next(ApiError.badRequest(e))
        }
    }
}

module.exports = new ProductController();
