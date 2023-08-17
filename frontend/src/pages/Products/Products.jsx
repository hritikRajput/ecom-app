import { useEffect, useState } from "react";
import getAllProducts from "../../services/productsService";
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

    // Render Card
    return (
        <div>
            <h1>I am product</h1>
            {products.map((product, index) => < ProductCard />)}
        </div>

    )
}

export default Products;