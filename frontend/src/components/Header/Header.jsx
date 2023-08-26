import search from "../../assets/search.png";
import user from "../../assets/user.png";
import shoppingCart from "../../assets/shopping-cart.png";
import heartFill from "../../assets/heart-fill.png";
import useFilter from "../../context/useFilter"
import { debounce } from "lodash"
import { Link } from "react-router-dom"

const Header = () => {

    const { dispatch } = useFilter()

    const handleSearch = debounce((e) => {
        dispatch({
            type: "SEARCH",
            payload: e.target.value,
        })
    }, 500)

    return (
        <header className="px-16 py-8 flex justify-between items-center border-[#e1e1e3] border-solid border-2 ">
            <div className=" flex text-secondary px-4 py-2">
                <Link to="/"><p className="text-4xl mr-8">Booknest</p></Link>
                <div className="text-2xl flex items-end gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/products">Shop</Link>
                </div>
            </div>

            <div className="flex items-center relative bg-white rounded">
                <input type="text" placeholder="Search..." onChange={handleSearch} className="relative cursor-text h-10 w-full rounded border-2 border-solid -border--color-b-input outline-0 focus:cursor-text pl-4 pr-12 shadow focus:shadow-md" />
                <div className="cursor-pointer h-full w-12 border-l -border--color-b-input-300 px-3.5 absolute right-0 flex justify-center items-center">
                    <img src={search} alt="search" className="h-4 w-4" />
                </div>
            </div>

            <div className="flex px-4 py-2">
                <div className="px-4">
                    <Link to="/wishlist"><img src={heartFill} alt="wishlist icon image" className="h-6 w-6" /></Link>
                </div>
                <div className="px-2">
                    <Link to="/cart"><img src={shoppingCart} alt="cart icon image" className="h-6 w-6" /></Link>
                </div>
                <div className="px-4">
                    <img src={user} alt="account icon image" className="h-6 w-6" />
                </div>
            </div>
        </header >
    )
}
export default Header
