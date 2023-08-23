import { createContext, useReducer, useEffect } from "react";
import wishListReducer from "./wishListReducer";
import PropTypes from "prop-types";
import getWishListItems from "../services/wishListService";

const WishListContext = createContext();
const WishListProvider = ({ children }) => {
  const initialState = {
    wishlist: [],
  };
  const [state, dispatch] = useReducer(wishListReducer, initialState);

  useEffect(() => {
    (async () => {
      const data = await getWishListItems();
      dispatch({
        type: "FETCH_WISHLIST_SUCCESS",
        payload: data,
      });
    })()
  }, [])

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
