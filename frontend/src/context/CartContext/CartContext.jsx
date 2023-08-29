import { createContext, useReducer, useEffect } from "react";
import cartReducer from "./cartReducer";
import PropTypes from "prop-types";
import { getCartItems } from "../../services/cartService"
import useAuth from "../AuthContext/useAuth";

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const initialState = {
        cart: [],
    };
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const { state: authState, dispatch: authDispatch } = useAuth();
    const token = authState.token

    useEffect(() => {
        if (token) {
            (async () => {
                const data = await getCartItems(token);
                dispatch({
                    type: "FETCH_CART_SUCCESS",
                    payload: data,
                });
            })()
        }
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
