const {User, Basket } = require('../models/index')
const ApiError = require('../error/ApiError')
const {hashPassword, comparePassword} = require("../libs/hashPassword")
const {generateJwt} = require('../libs/generateJwt')






class UserController {
    async registration(req,res,next) {
        const {email, password,name} = req.body
        if (!email || !password || !name){
            return next(ApiError.badRequest("Нету email или пароль"))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate){
            return next(ApiError.badRequest("Пользователь с таким email уже зарегестрирован"))
        }

        const hashP = await hashPassword(password)
     
        const user = await User.create({name,email,password: hashP})
        const token = generateJwt(user.id, user.email,user.name)
        return res.json(token)
    } 

    async login(req,res,next){ 
        const {email,password} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("Нету email или пароль"))
        }
        const user = await User.findOne({where: {email}})
    

        if (!user) {
            return next(ApiError.badRequest("Такого пользователя нет"))
        }

        let compareP = comparePassword(password,user.password)
        if (!compareP) {
            return next(ApiError.badRequest("Неверный пароль"))
        }
        const token = generateJwt(user.id, user.email, user.name)
        return res.json(token)
    }

    async check(req,res, next){
        const token = generateJwt(req.user.id, req.user.email,req.user.name)
        return res.json(token)
    }
}

module.exports = new UserController()