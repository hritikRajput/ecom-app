const razorpay = require("razorpay");
const instance = new razorpay({
  key_id: `${process.env.RAZORPAY_KEY}`,
  key_secret: `${process.env.RAZORPAY_SECRET}`,
});

const createOrder = async (req, res) => {
  try {
    const { user } = req;
    const amount = 10000;
    const currency = "INR";

    const options = {
      amount,
      currency,
      receipt: `order_${Date.now()}`,
      notes: {
        user_id: user._id,
        username: user.name,
      },
    };

    const order = await instance.orders.create(options);
    res.json({ order_id: order.id, amount, currency, notes: options.notes });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ error: "Error creating Razorpay order" });
  }
};

exports.module = { createOrder };
