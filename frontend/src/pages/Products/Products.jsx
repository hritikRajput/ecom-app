import { useEffect, useState } from "react";
import getAllProducts from "../../services/productsService";
import Header from "../../components/Header/Header"
import ProductCard from "../../components/ProductCard/ProductCard";


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
            <div className="px-32 py-8">
                <h1 className="text-4xl text-center mb-4 text-seconday-dark">Products Page</h1>
                <div className="grid grid-cols-5 gap-x-6 gap-y-8 max-w-[1024px] mx-auto">
                    {products.map((product) => < ProductCard key={product.id} coverImage={product.coverImage} title={product.title} author={product.author} price={product.price} discountedPrice={product.discountedPrice} />)}
                </div>
            </div>
        </>

    )
}

export default Products;