import { createContext, useReducer } from "react";
import filterReducer from "./filterReducer";
import PropTypes from 'prop-types';

const initialState = {
    category: "",
    price: {
        min: null,
        max: null,
    },
    rating: 0,
}
const FilterContext = createContext();
const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, initialState)
    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    )
}
FilterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { FilterContext, FilterProvider }