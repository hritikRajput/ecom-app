import heart from "../../assets/heart.png"
import heartFill from "../../assets/heart-fill.png";
import useWishList from "../../context/useWishList";
import { addWishListItem, removeWishListItem } from "../../services/wishListService";
const ProductCard = ({ product }) => {
    const { _id, coverImage, title, author, price, discountedPrice } = product;
    const { state, dispatch } = useWishList();

    const checkProductInWishList = (wishlist, product) => {
        return wishlist.length ? wishlist.some(wishListItem => wishListItem._id === product._id) : false;
    }
    const isWishListed = checkProductInWishList(state.wishlist, product)

    const handleWishListClick = () => {
        if (!isWishListed) {
            addWishListItem(product)
            dispatch({
                type: "ADD_TO_WISHLIST",
                payload: product,
            }
            )
        }
        else {
            removeWishListItem(_id)
            dispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: product,
            }
            )
        }
    }

    return (
        <div className="bg-white grid grid-cols-1 grid-rows-layout-5 booklist-book" >
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
                <div onClick={handleWishListClick} className="absolute w-8 h-8 flex justify-center items-center rounded-[50%] bg-slate-200 top-1 right-1 cursor-pointer transition ease-in duration-200 hover:transform hover:scale-110"><img src={isWishListed ? heartFill : heart} alt="" className="w-5 h-5" /></div>
            </div>
            <div className="mt-2">
                <div className="pt-2 leading-5 font-bold ellipsis line-clamp-2"><a href="">{title}</a></div>
                <div className="text-sm">{author}</div>
                <div className="pb-4 text-sm flex items-center ">
                    <span className="line-through mr-2">&#8377;{price}</span>
                    <span className="font-bold">&#8377;{discountedPrice}</span>
                </div>
            </div>
        </div >
    )
}


export default ProductCard