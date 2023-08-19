const PriceFilter = () => {
    return (
        <div className="mb-2">
            <div className="bg-gray-lighter px-4 py-4 mb-1">PRICE</div>
            <ul className="filters-ul">
                <li><span className="cursor-pointer">Under &#8377;250</span></li>
                <li><span className="cursor-pointer">&#8377;250-500</span></li>
                <li><span className="cursor-pointer">&#8377;500-1000</span></li>
                <li><span className="cursor-pointer">&#8377;1000-1500</span></li>
                <li><span className="cursor-pointer">Over &#8377;1500</span></li>
            </ul>
        </div>
    )
}

export { PriceFilter }
