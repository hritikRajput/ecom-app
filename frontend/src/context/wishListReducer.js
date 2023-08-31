const wishListReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_WISHLIST_SUCCESS":
      return {
        ...state,
        wishlist: action.payload,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    case "SET_WISHLIST":
      return {
        wishlist: action.payload,
      };
    default:
      return state;
  }
};

export default wishListReducer;
