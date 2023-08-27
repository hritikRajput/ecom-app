import useFilter from "../../context/useFilter"
const CategoryFilter = () => {
    const { dispatch } = useFilter()
    const handleClick = (category) => {
        dispatch({ type: 'SET_CATEGORY', payload: category });
    }

    return (
        <div className="mb-2">
            <div className="bg-gray-lighter px-4 py-4 mb-1">CATEGORY</div>
            <ul className="filters-ul">
                <li><span className="cursor-pointer" onClick={() => handleClick("Science")}>Science</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick("Mystery")}>Mystery</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick("Romance")}>Romance</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick("History")}>History</span></li>
                <li><span className="cursor-pointer" onClick={() => handleClick("Self Help")}>Self Help</span></li>
            </ul>
        </div>
    )
}

export { CategoryFilter }
