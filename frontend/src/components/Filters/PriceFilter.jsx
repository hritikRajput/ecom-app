import useFilter from "../../context/useFilter";
const PriceFilter = () => {
    const { dispatch } = useFilter()
    const handleClick = (min, max) => {
        dispatch({
            type: "SET_PRICE_RANGE",
            payload: { min, max },
        });
    }


    return (
        <div className="mb-2">
            <div className="bg-gray-lighter px-4 py-4 mb-1">PRICE</div>
            <ul className="filters-ul">
                <li><span className="cursor-pointer" onClick={() => handleClick(null, 499)}>Under &#8377;500</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick(500, 999)}>&#8377;500-1000</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick(1000, 1499)}>&#8377;1000-1500</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick(1500, 1999)}>&#8377;1500-2000</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick(2000, null)}>Over &#8377;2000</span></li>
            </ul>
        </div>
    )
}

export { PriceFilter }
