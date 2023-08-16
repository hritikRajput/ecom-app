const WishList = require("../models/WishList");

const addWishListItems = async (req, res) => {
  try {
    const newItems = req.body;
    const createdItems = await WishList.create(newItems);
    res.status(201).json(createdItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An error occurred while creating new wishList items",
      err,
    });
  }
};

const removeWishListItem = async (req, res) => {
  const itemId = req.params.id;
  try {
    const removedItem = await WishList.findByIdAndDelete(itemId);

    if (!removedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "success" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while removing wishList item", err });
  }
};

const getWishListItems = async (req, res) => {
  try {
    const wishListItems = await WishList.find({});
    wishListItems
      ? res.status(200).json(wishListItems)
      : "No items in wishList";
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while fetching wishList items", err });
  }
};

module.exports = { addWishListItems, removeWishListItem, getWishListItems };
