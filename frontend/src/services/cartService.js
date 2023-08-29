import axios from "axios";
const BASE_URL = "https://hritikrajput-ecommercebackend.onrender.com/";
const getCartItems = async (token) => {
  try {
    const { data } = await axios.get(`${BASE_URL}api/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    console.error("Error in getting cart data", err);
  }
};

const addCartItem = async (product, token) => {
  try {
    const { data } = await axios.post(`${BASE_URL}api/cart`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    console.error("Error in adding product to cart", err);
  }
};
const removeCartItem = async (_id, token) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}api/cart/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    console.error("Error in removing product from cart", err);
  }
};

export { getCartItems, addCartItem, removeCartItem };
