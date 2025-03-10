const authMiddleware = require("../middleware/authMiddleware");
const OrderController = require("../contollers/OrderController")
const router = require("express").Router();

router.post('/',authMiddleware, OrderController.CreateOrder)
router.get('/',authMiddleware, OrderController.GetOrdersByUserID)
router.patch('/', authMiddleware, OrderController.RefreshOrder)
module.exports = router;