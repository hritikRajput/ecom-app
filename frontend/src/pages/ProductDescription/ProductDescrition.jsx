import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../services/productsService";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useCart from "../../context/CartContext/useCart";
import useAuth from "../../context/AuthContext/useAuth";
import { addCartItem } from "../../services/cartService";

const ProductDescrition = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Access the product ID from the URL
    const [product, setProduct] = useState([])
    const { state: cartState, dispatch: cartDispatch } = useCart();
    const { state: authState } = useAuth();

    const { _id, ...productWithoutId } = product;
    const token = authState.token

    console.log("cart: ", cartState.cart)
    console.log("product", product)

    const checkInCart = (cart, product) => {
        return cart.length ? cart.some(cartItem => cartItem.productId === product._id) : false;
    }
    const isInCart = checkInCart(cartState.cart, product)

    const handleAddToCart = () => {
        const cartItem = { ...productWithoutId, productId: product._id }
        if (token) {
            if (!isInCart) {
                addCartItem(cartItem, token)
                cartDispatch({
                    type: "ADD_TO_CART",
                    payload: cartItem,
                }
                )
            }
            else {
                navigate("/cart")
            }
        }
    }


    useEffect(() => {
        (async () => {
            const data = await getProductById(id);
            setProduct(data)
        })()
    }, [id])
    return (

        <div>
            <Header />
            <main>
                <div className="flex justify-center gap-8 px-16 py-8 max-w-[1024px] mx-auto">
                    <div className="w-2/3"><img className="w-full h-auto block" src={product.coverImage} alt="Image of product" /></div>
                    <div>
                        <div className="text-2xl font-bold mb-2">{product.title}</div>
                        <div className="text-sm mb-2">{product.author} (Author)</div>
                        <div className="w-fit border-2 border-solid border-secondary bg-color-callout p-4 mb-4 rounded">
                            <div className="text-secondary">{product.format}</div>
                            <div className="flex gap-2">
                                <div className="line-through text-color-primary">&#8377;{product.price}</div>
                                <div>&#8377;{product.discountedPrice}</div>
                            </div>
                        </div>
                        <div onClick={handleAddToCart}>
                            <button className="uppercase rounded bg-color-primary text-opacity-1 text-white font-bold px-6 py-2 hover:scale-105 transition ease-in duration-200">{isInCart ? "In Cart" : "Add to Cart"}</button>
                        </div>
                        <div className="py-4">
                            <h2 className="text-xl font-bold mb-2">Description</h2>
                            <p className="mb-2">{product.description}</p>
                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-2">Product Details</h2>
                                <div className="grid grid-cols-auto-1 gap-x-2 gap-y-2 items-center">
                                    <p className="text-gray-lighter text-right">Pages</p>
                                    <p> {product.pages}</p>
                                    <p className="text-gray-lighter text-right">Publisher</p>
                                    <p>{product.publisher}</p>
                                    <p className="text-gray-lighter text-right">Rating</p>
                                    <p>{product.rating}</p>
                                    <p className="text-gray-lighter text-right">Genre</p>
                                    <div>{product.genre?.map(item => <span key={item}>{item}, </span>)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ProductDescrition
