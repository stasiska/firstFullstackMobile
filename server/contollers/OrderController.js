const ApiError = require("../error/ApiError")
const { Order } = require("../models/index")
const {decodeToken} = require('../libs/generateJwt')

class OrderController {
    async CreateOrder(req,res,next){
        const userId = decodeToken(req.headers.authorization.split(' ')[1])
        const {quantity, totalPrice} = req.body

        const order = await Order.create({userId,quantity,totalPrice})
        return res.json(order)
    }

    async RefreshOrder(req,res, next){
        const {id} = req.body

        const order = await Order.findOne({where: id})

        order.isCompleted = true

        await order.save()
        return res.json(order)
    }

    async GetOrdersByUserID(req,res,next){
        const userId = decodeToken(req.headers.authorization.split(' ')[1])
        
        const orders = await Order.findAndCountAll({userId})

        return res.json(orders)
    }
}

module.exports = new OrderController()