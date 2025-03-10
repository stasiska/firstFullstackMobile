const ProductController = require("../contollers/ProductController");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post('/', ProductController.createProduct)
router.get('/',ProductController.getAllProduct)
router.get('/:id', ProductController.getOneProduct)
router.delete('/:id', authMiddleware ,ProductController.deleteProduct)
module.exports = router;