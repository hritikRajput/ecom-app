const express = require("express");
const router = express.Router();

const {
  addCartItems,
  removeCartItem,
  getCartItems,
} = require("../controller/cartController");

router.route("/").post(addCartItems);
router.route("/:id").delete(removeCartItem);
router.route("/").get(getCartItems);

module.exports = router;
