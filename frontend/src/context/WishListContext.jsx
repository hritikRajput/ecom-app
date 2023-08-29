import { createContext, useReducer, useEffect } from "react";
import wishListReducer from "./wishListReducer";
import PropTypes from "prop-types";
import { getWishListItems } from "../services/wishListService";
import useAuth from "./AuthContext/useAuth";

const WishListContext = createContext();
const WishListProvider = ({ children }) => {
  const initialState = {
    wishlist: [],
  };
  const [state, dispatch] = useReducer(wishListReducer, initialState);
  const { state: authState } = useAuth();
  const token = authState.token

  useEffect(() => {
    if (token) {
      (async () => {
        const data = await getWishListItems(token);
        dispatch({
          type: "FETCH_WISHLIST_SUCCESS",
          payload: data,
        });
      })()
    }
  }, [token])

  return (
    <WishListContext.Provider value={{ state, dispatch }}>
      {children}
    </WishListContext.Provider>
  );
};
WishListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { WishListContext, WishListProvider };
