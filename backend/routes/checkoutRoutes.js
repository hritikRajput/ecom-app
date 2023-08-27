const express = require("express");
const router = express.Router();

const { createOrder } = require("../controller/checkoutController");

router.route("/").post(createOrder);

module.exports = router;
