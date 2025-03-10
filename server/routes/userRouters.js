const UserController = require("../contollers/UserController");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware,UserController.check)
module.exports = router;