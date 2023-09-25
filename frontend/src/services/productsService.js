import axios from "axios";
const BASE_URL = "https://hritikrajput-ecommercebackend.onrender.com/";
const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}api/products`);
    return data;
  } catch (err) {
    console.error("Error in getting data", err);
  }
};

const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}api/products/${id}`);
    return data;
  } catch (err) {
    console.error("Error in getting data", err);
  }
};

export { getAllProducts, getProductById };
