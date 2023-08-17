import { useEffect } from "react";
import getAllProducts from "../../services/productsService";

const Products = () => {
    useEffect(() => {
        (async () => {
            const data = await getAllProducts();
            console.log(data)
        })()
    }, [])
}

export default Products;