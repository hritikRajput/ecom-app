const razorpay = require("razorpay");
const instance = new razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});
console.log("RAZORPAY_KEY:", process.env.RAZORPAY_KEY);
console.log("RAZORPAY_SECRET:", process.env.RAZORPAY_SECRET);
const createOrder = async (req, res) => {
  try {
    const amount = 10000;
    const currency = "INR";

    const options = {
      amount,
      currency,
      receipt: `order_${Date.now()}`,
    };

    const order = await instance.orders.create(options);
    console.log(order);
    res.json({ order_id: order.id, amount, currency });
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    res.status(500).json({ error: "Error creating Razorpay order", err });
  }
};

module.exports = { createOrder };
