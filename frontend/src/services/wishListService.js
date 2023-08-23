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

export default getWishListItems;
