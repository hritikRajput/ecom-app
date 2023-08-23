import Header from "../../components/Header/Header"
import WishListCard from "../../components/WishListCard/WishListCard";
import useWishList from "../../context/useWishList";


const WishList = () => {
    const { state: { wishlist } } = useWishList();

    return (
        <>
            <Header />
            <div className="grid grid-cols-6 px-8 ">
                <div className="px-32 py-8 col-span-5">
                    <h1 className="text-4xl text-center mb-4 text-seconday-dark">WishList</h1>
                    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-5 gap-x-6 gap-y-8 max-w-[1024px] mx-auto">
                        {wishlist.map((product) => < WishListCard key={product.id} product={product} />)}
                    </div>
                </div>
            </div>
        </>

    )
}

export default WishList;