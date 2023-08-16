const express = require("express");

const router = express.Router();

const {
  addWishListItems,
  removeWishListItem,
  getWishListItems,
} = require("../controller/wishListController");

router.route("/").post(addWishListItems);
router.route("/:id").delete(removeWishListItem);
router.route("/").get(getWishListItems);

module.exports = router;
