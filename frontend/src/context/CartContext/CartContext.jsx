import { createContext, useReducer, useEffect } from "react";
import cartReducer from "./cartReducer";
import PropTypes from "prop-types";
import getCartItems from "../../services/cartService"

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const initialState = {
        cart: [],
    };
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        (async () => {
            const data = await getCartItems();
            dispatch({
                type: "FETCH_CART_SUCCESS",
                payload: data,
            });
        })()
    }, [])

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { CartContext, CartProvider };
