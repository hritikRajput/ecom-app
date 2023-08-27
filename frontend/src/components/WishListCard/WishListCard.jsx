import crossCircle from "../../assets/cross-circle.png"
import useWishList from "../../context/useWishList";
import useCart from "../../context/CartContext/useCart";
import { removeWishListItem } from "../../services/wishListService";
import { addCartItem } from "../../services/cartService";
import { useNavigate } from "react-router-dom";

const WishListCard = ({ product }) => {
    const { _id, coverImage, title, author, price, discountedPrice } = product;
    const { dispatch: wishListDispatch } = useWishList();
    const { state: cartState, dispatch: cartDispatch } = useCart();
    const navigate = useNavigate();

    const checkInCart = (cart, product) => {
        return cart.length ? cart.some(cartItem => cartItem._id === product._id) : false;
    }
    const isInCart = checkInCart(cartState.cart, product)

    const handleWishListClick = () => {
        removeWishListItem(_id)
        wishListDispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: product,
        }
        )
    }
    const handleAddToCart = () => {
        if (!isInCart) {
            addCartItem(product)
            cartDispatch({
                type: "ADD_TO_CART",
                payload: product,
            }
            )
        }
        else {
            navigate("/cart")
        }
    }

    return (
        <div className="bg-white grid grid-cols-1 grid-rows-layout-6 booklist-book" >
            <div className="row-span-1 relative w-full pb-[145%] rounded self-stretch bg-slate-50">
                <a href="#" className="p-4 absolute top-0 left-0 right-0 bottom-0 flex">
                    <div className="rounded relative shadow-product-image transition ease-in duration-200 flex flex-1 product-image">
                        <img
                            src={coverImage}
                            alt=""
                            className="max-w-full h-auto block w-full rounded object-co bg-[#fff4]-200"
                        />
                    </div>
                </a>
                <div onClick={handleWishListClick} className="absolute w-8 h-8 flex justify-center items-center rounded-[50%] bg-slate-200 top-1 right-1 cursor-pointer transition ease-in duration-200 hover:transform hover:scale-110"><img src={crossCircle} alt="" className="w-5 h-5" /></div>
            </div>

            <h2 className="pt-2 leading-5 font-bold ellipsis line-clamp-2"><a href="">{title}</a></h2>
            <div className="text-sm">{author}</div>
            <div className="pb-4 text-sm flex items-center">
                <span className="line-through mr-2">&#8377;{price}</span>
                <span className="font-bold">&#8377;{discountedPrice}</span>
            </div>

            <div className="px-2" onClick={handleAddToCart}>
                <button className="uppercase rounded bg-secondary text-opacity-1 text-white font-bold px-6 py-2 hover:scale-105 transition ease-in duration-200 w-full">{isInCart ? "In Cart" : "Add to Cart"}</button>
            </div>
        </div >
    )
}


export default WishListCard