import { useEffect, useState } from "react";
import getAllProducts from "../../services/productsService";
import Header from "../../components/Header/Header"
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoryFilter, PriceFilter } from "../../components/Filters"


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        (async () => {
            const data = await getAllProducts();
            setProducts(data)
            console.log(data)
        })()
    }, [])

    return (
        <>
            <Header />
            <div className="grid grid-cols-6 px-8">
                <div className="col-span-1 mr-6 py-8" >
                    <h3 className="my-2">Choose filters: </h3>
                    <CategoryFilter />
                    <PriceFilter />
                </div>
                <div className="px-32 py-8 col-span-5">
                    <h1 className="text-4xl text-center mb-4 text-seconday-dark">Products Page</h1>
                    <div className="grid grid-cols-5 gap-x-6 gap-y-8 max-w-[1024px] mx-auto">
                        {products.map((product) => < ProductCard key={product.id} coverImage={product.coverImage} title={product.title} author={product.author} price={product.price} discountedPrice={product.discountedPrice} />)}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Products;