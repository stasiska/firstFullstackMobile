const authMiddleware = require("../middleware/authMiddleware");
const notificationController = require("../contollers/NotificationsController")
const router = require("express").Router();

router.post('/', notificationController.create)
router.get('/all',authMiddleware, notificationController.getManyByUserId)
router.get('/', authMiddleware, notificationController.getOneById)
module.exports = router;