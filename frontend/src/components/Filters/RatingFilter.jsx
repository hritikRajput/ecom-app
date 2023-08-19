const RatingFilter = () => {
    return (
        <div>
            <div>RATINGS</div>
            <ul>
                <li><span className="cursor-pointer">Under &#8377;250</span></li>
                <li><span className="cursor-pointer">&#8377;250-500</span></li>
                <li><span className="cursor-pointer">&#8377;500-1000</span></li>
                <li><span className="cursor-pointer">&#8377;1000-1500</span></li>
                <li><span className="cursor-pointer">Over &#8377;1500</span></li>
            </ul>
        </div>
    )
}

export { RatingFilter }
