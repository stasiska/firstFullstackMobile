const ApiError = require('../error/ApiError')
const { Cart } = require('../models/index')
const { decodeToken } = require('../libs/generateJwt')

class CartController {
    async add(req,res,next){
        const userId = decodeToken(req.headers.authorization.split(' ')[1])
        const {itemId} = req.body

        if(!userId){
            res.json({error: 'пользователь не зареган'})
        }
        
        const cart = await Cart.create({userId,itemId})
        return res.json(cart)
        
    }

    async getCartByUserId(req,res, next){
        const userId = decodeToken(req.headers.authorization.split(' ')[1])
        
        const cart = await Cart.findAndCountAll({where: {userId}})

        return res.json(cart)
    }

    async deleteProducts(req,res,next){
        const userId = decodeToken(req.headers.authorization.split(' ')[1])

        Cart.destroy({where: {userId}})
        return res.json("delete succssefuly")
    }
}

module.exports = new CartController()