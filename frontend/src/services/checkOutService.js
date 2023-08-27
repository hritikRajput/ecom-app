import axios from "axios";
const BASE_URL = "https://hritikrajput-ecommercebackend.onrender.com/";

export const initiateRazorpayPayment = async (navigate) => {
  try {
    const response = await axios.post(`${BASE_URL}api/checkout`);
    const { key, order_id, amount, currency } = response.data;

    const options = {
      key,
      amount,
      currency,
      order_id,
      name: "Booknest",
      description: "Thank you for shopping with us.",
      handler: function (response) {
        console.log("Payment ID:", response.razorpay_payment_id);
        navigate("/products");
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.error("Error initiating Razorpay payment:", error);
  }
};
