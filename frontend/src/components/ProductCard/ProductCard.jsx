const ProductCard = () => {
    return (
        <div className="px-16 py-16">
            <div className="bg-pink-100 rounded-md overflow-hidden shadow-md">
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446469353i/22822858.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="BookCard-content m-1">
                    <div className="BookCard-title font-bold">A Little Life</div>
                    <div className="BookCard-author text-gray-600">Hanya Yanagihara</div>
                    <div className="BookCard-price">
                        <span className="BookCard-op line-through mr-2">&#8377;150</span>
                        <span className="Bookcard-cp">&#8377;120</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard