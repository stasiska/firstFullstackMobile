const authMiddleware = require("../middleware/authMiddleware");
const cartController = require('../contollers/cartController')

const router = require("express").Router();

router.post('/',authMiddleware, cartController.add)
router.get('/',authMiddleware, cartController.getCartByUserId)
router.delete('/', authMiddleware, cartController.deleteProducts)
module.exports = router;