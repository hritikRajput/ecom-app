const Product = require("../models/Product");
const getAllProducts = async (req, res) => {
  try {
    const productsData = await Product.find({});
    productsData
      ? res.status(200).json(productsData)
      : res.status(404).json({ error: "No data found" });
  } catch (err) {
    console.log(err);
  }
};

const createProducts = async (req, res) => {
  try {
    const newProducts = req.body;
    const createdProducts = await Product.create(newProducts);
    res.status(201).json(createdProducts);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while creating new products", err });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const removedProduct = await Product.findByIdAndDelete(productId);
    if (!removedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while deleting products", err });
  }
};

const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while getting product", err });
  }
};

module.exports = {
  getAllProducts,
  createProducts,
  deleteProduct,
  getProductById,
};
