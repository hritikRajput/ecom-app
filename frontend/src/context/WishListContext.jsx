import { createContext, useReducer } from "react";
import wishListReducer from "./wishListReducer";
import PropTypes from "prop-types";

const initialState = {
  wishlist: [],
};
const WishListContext = createContext();
const WishListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, initialState);
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
