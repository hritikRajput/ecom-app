import { useNavigate } from "react-router-dom";
import CartCard from "../../components/CartCard/CartCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import useCart from "../../context/CartContext/useCart";
import { initiateRazorpayPayment } from "../../services/checkOutService";

const Cart = () => {
    const { state: { cart } } = useCart();
    const navigate = useNavigate();
    const totalPrice = () => {
        return 100;
    }
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => reject(false);
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async (navigate) => {
        try {
            const response = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );

            if (!response) {
                console.log({
                    open: true,
                    message: "Razorpay SDK failed to load",
                    type: "error",
                });
                return;
            }
            initiateRazorpayPayment(navigate)
        }
        catch (err) {
            console.error(err)
        }
    }
    return (
        <>
            <Header />
            <div className="px-40 py-8">
                <div className="max-w-[1024px] mx-auto">
                    <h1 className="text-4xl text-center mb-4 text-seconday-dark">Cart</h1>
                    <div className="text-right"> <button className="uppercase rounded bg-color-primary border-2 border-solid border-color-primary text-opacity-1 text-white font-bold px-6 py-2" onClick={() => displayRazorpay(navigate)}>Checkout (Total: &#8377;{totalPrice().toFixed(2)})</button></div>
                    <div className="grid grid-cols-layout-cart grid-rows-1 font-bold gap-x-4 ">
                        <h3 className="col-start-1 col-end-3 p-4">Item</h3>
                        <h3 className="col-start-3 col-end-4 p-4">Quantity</h3>
                        <h3 className="col-start-4 col-end-5 p-4">Price</h3>
                    </div>
                    <div className="w-full">
                        {cart.map((product) => < CartCard key={product._id} product={product} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Cart;