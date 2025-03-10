const ApiError = require('../error/ApiError')
const {Notification} = require('../models/index')
const {decodeToken} = require("../libs/generateJwt")

class Notifications {
    async create(req,res,next){
        const userId = decodeToken(req.headers.authorization.split(' ')[1])
        
        const {header, content} = req.body

        const notification = await Notification.create({userId,header,content})
        return res.json(notification)
    }

    async getManyByUserId(req,res, next){
        const userId = decodeToken(req.headers.authorization.split(' ')[1])
     
        const notifications = await Notification.findAndCountAll({where: {userId}})
        return res.json(notifications)
    }

    async getOneById(req,res,next){
        const userId = decodeToken(req.headers.authorization.split(' ')[1])

        const id = req.query

        const notification = await Notification.findOne({where: id})

        return res.json(notification)
    }

    async deleteNotificationByUserId(req,res,next){
        const userId = decodeToken(req.headers.authorization.split(' ')[1])

        Notification.destroy({where: userId})
        res.json("delete is Successfuly")
    }
}

module.exports = new Notifications()