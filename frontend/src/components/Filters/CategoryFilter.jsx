const CategoryFilter = () => {
    return (
        <div className="mb-2">
            <div className="bg-gray-lighter px-4 py-4 mb-1">CATEGORY</div>
            <ul className="filters-ul">
                <li><span className="cursor-pointer">Science</span></li>
                <li><span className="cursor-pointer">Myster</span></li>
                <li><span className="cursor-pointer">Romance</span></li>
                <li><span className="cursor-pointer">History</span></li>
                <li><span className="cursor-pointer">Self Help</span></li>
            </ul>
        </div>
    )
}

export { CategoryFilter }
