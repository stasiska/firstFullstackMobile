const router = require("express").Router();
const userRouter = require('./userRouters')
const productRouter = require('./productRouter')
const cartRouter = require('./cartRouter')
const orderRouter = require("./orderRouter")
const notificationRouter = require("./notificationRouter")

router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/cart', cartRouter)
router.use('/orders',orderRouter)
router.use('/notification', notificationRouter)

module.exports = router;