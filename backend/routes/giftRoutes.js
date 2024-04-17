const { Router } = require("express");
const giftController = require("../controllers/giftController");
// const requireAuth = require("../middleware/requireAuth");
const router = Router();

// // router.use(requireAuth);

// routers children

// Get All gift
router.get("/", giftController.gifts_report_get_all);

module.exports = router;
