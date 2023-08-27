const cartReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CART_SUCCESS":
      return {
        ...state,
        cart: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default cartReducer;
