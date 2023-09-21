import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import WishListCard from "../../components/WishListCard/WishListCard";
import useWishList from "../../context/useWishList";
import useAuth from "../../context/AuthContext/useAuth";


const WishList = () => {
    const { state: { wishlist } } = useWishList();
    const { state: authState } = useAuth();

    const token = authState.token
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="px-40 py-8 flex-grow">
                <h1 className="text-4xl text-center mb-4 text-seconday-dark">WishList</h1>
                {token ? (<div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-x-6 gap-y-8 max-w-[1024px] mx-auto">
                    {wishlist.map((product) => < WishListCard key={product.id} product={product} />)}
                </div>) : (<div className="text-color-dark-text max-w-[1024px] mx-auto text-center">
                    <h2 className="text-2xl mb-4">Missing your wishlist?</h2>
                    <p className="mb-6">Login to see what have you added in wishlist</p>
                    <Link to="/login"><button className="px-2 py-1 border-solid border-2 bg-color-accent text-white rounded">Login</button></Link>
                </div>)}
            </div>
            <Footer />
        </div >

    )
}

export default WishList;