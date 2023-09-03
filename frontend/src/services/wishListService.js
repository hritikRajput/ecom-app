import axios from "axios";
const BASE_URL = "https://hritikrajput-ecommercebackend.onrender.com/";

const getWishListItems = async (token) => {
  try {
    const { data } = await axios.get(`${BASE_URL}api/wishlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    console.error("Error in getting wishlist data", err);
  }
};
const addWishListItem = async (product, token) => {
  try {
    const { data } = await axios.post(`${BASE_URL}api/wishlist`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    console.error("Error in adding product to wishlist", err);
  }
};
const removeWishListItem = async (productId, token) => {
  try {
    const { data } = await axios.delete(
      `${BASE_URL}api/wishlist/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.error("Error in removing product from wishlist", err);
  }
};

export { getWishListItems, addWishListItem, removeWishListItem };
