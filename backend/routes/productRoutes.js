const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProducts,
  deleteProduct,
  getProductById,
} = require("../controller/productController");

router.route("/").get(getAllProducts);
router.route("/").post(createProducts);
router.route("/:id").get(getProductById);
router.route("/:id").delete(deleteProduct);

module.exports = router;
