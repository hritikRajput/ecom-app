import axios from "axios";
const BASE_URL = "https://hritikrajput-ecommercebackend.onrender.com/";
const getWishListItems = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}api/wishlist`);
    return data;
  } catch (err) {
    console.error("Error in getting wishlist data", err);
  }
};
const addWishListItem = async (product) => {
  try {
    const { data } = await axios.post(`${BASE_URL}api/wishlist`, product);
    return data;
  } catch (err) {
    console.error("Error in adding product to wishlist", err);
  }
};
const removeWishListItem = async (_id) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}api/wishlist/${_id}`);
    return data;
  } catch (err) {
    console.error("Error in removing product from wishlist", err);
  }
};

export { getWishListItems, addWishListItem, removeWishListItem };
