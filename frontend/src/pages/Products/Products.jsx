import { useEffect, useState } from "react";
import getAllProducts from "../../services/productsService";
import Header from "../../components/Header/Header"
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoryFilter, PriceFilter, RatingFilter } from "../../components/Filters"
import useFilter from "../../context/useFilter";


const Products = () => {
    const [products, setProducts] = useState([])
    const { state } = useFilter();
    useEffect(() => {
        (async () => {
            const data = await getAllProducts();
            setProducts(data)
            console.log(data)
        })()
    }, [])

    const filterProductByCategory = (products, selectedCategory) => {
        return (selectedCategory ? products.filter(product => product.genre.some((productGenre) => productGenre === selectedCategory)) : products)
    }
    const filterProductByPrice = (products, minPrice, maxPrice) => {
        return (
            (minPrice || maxPrice) ? products.filter(product => {
                const productPrice = parseFloat(product.discountedPrice)
                console.log(productPrice, minPrice, maxPrice)
                return (
                    (minPrice === null || productPrice >= minPrice) && (maxPrice === null || productPrice < maxPrice)
                )
            }) : products)
    }
    const filterProductByRating = (products, selectedRating) => {
        return (selectedRating ? products.filter(product => (product.rating >= selectedRating - 1)) : products)
    }

    const filteredByCategory = filterProductByCategory(products, state.category);
    const filteredByPrice = filterProductByPrice(filteredByCategory, state.price.min, state.price.max);
    const filteredByRating = filterProductByRating(filteredByPrice, state.rating);

    return (
        <>
            <Header />
            <div className="grid grid-cols-6 px-8 ">
                <div className="col-span-1 mr-6 py-8" >
                    <h3 className="my-2">Choose filters: </h3>
                    <CategoryFilter />
                    <PriceFilter />
                    <RatingFilter />
                </div>
                <div className="px-32 py-8 col-span-5">
                    <h1 className="text-4xl text-center mb-4 text-seconday-dark">Products Page</h1>
                    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-5 gap-x-6 gap-y-8 max-w-[1024px] mx-auto">
                        {filteredByRating.map((product) => < ProductCard key={product.id} coverImage={product.coverImage} title={product.title} author={product.author} price={product.price} discountedPrice={product.discountedPrice} />)}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Products;