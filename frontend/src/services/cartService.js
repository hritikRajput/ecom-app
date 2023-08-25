import axios from "axios";
const BASE_URL = "https://hritikrajput-ecommercebackend.onrender.com/";
const getCartItems = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}api/cart`);
    return data;
  } catch (err) {
    console.error("Error in getting cart data", err);
  }
};

export default getCartItems;
