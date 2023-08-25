const Cart = require("../models/Cart");

const addCartItems = async (req, res) => {
  try {
    const newItems = req.body;
    const createdItems = await Cart.create(newItems);
    res.status(201).json(createdItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An error occurred while creating new cart items",
      err,
    });
  }
};

const removeCartItem = async (req, res) => {
  const itemId = req.params.id;
  try {
    const removedItem = await Cart.findByIdAndDelete(itemId);

    if (!removedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "success" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while removing cart item", err });
  }
};

const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({});
    cartItems ? res.status(200).json(cartItems) : "No items in cart";
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while fetching cart items", err });
  }
};

module.exports = { addCartItems, removeCartItem, getCartItems };
