import axios from "axios";
const BASE_URL = "https://hritikrajput-ecommercebackend.onrender.com/";
const signUp = async (formData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}api/auth/signup`, formData);
    return data;
  } catch (err) {
    console.error("Error in signing up", err);
  }
};
const logIn = async (formData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}api/auth/login`, formData);
    return data;
  } catch (err) {
    console.error("Error in loging in", err);
  }
};

export { signUp, logIn };
