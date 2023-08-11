const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProducts,
} = require("../controller/productController");

router.route("/").get(getAllProducts);
router.route("/").post(createProducts);

module.exports = router;
