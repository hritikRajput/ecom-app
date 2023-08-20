import useFilter from "../../context/useFilter";
const RatingFilter = () => {
    const { dispatch } = useFilter()
    const handleClick = (rating) => {
        dispatch({
            type: "SET_RATING",
            payload: rating,
        });
    }
    return (
        <div className="mb-2">
            <div className="bg-gray-lighter px-4 py-4 mb-1">RATINGS</div>
            <ul className="filters-ul">
                <li><span className="cursor-pointer" onClick={() => handleClick(5)}>&#11088; &#11088; &#11088; &#11088; &#11088;</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick(4)}>&#11088; &#11088; &#11088; &#11088;</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick(3)}>&#11088; &#11088; &#11088;</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick(2)}>&#11088; &#11088;</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick(1)}>&#11088;</span></li>
            </ul>
        </div>
    )
}

export { RatingFilter }
