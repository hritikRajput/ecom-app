import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import WishListCard from "../../components/WishListCard/WishListCard";
import useWishList from "../../context/useWishList";


const WishList = () => {
    const { state: { wishlist } } = useWishList();
    return (
        <>
            <Header />
            <div className="px-40 py-8">
                <h1 className="text-4xl text-center mb-4 text-seconday-dark">WishList</h1>
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-5 gap-x-6 gap-y-8 max-w-[1024px] mx-auto">
                    {wishlist.map((product) => < WishListCard key={product.id} product={product} />)}
                </div>
            </div>
            <Footer />
        </>

    )
}

export default WishList;