const authReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        ...action.payload,
      };
    case "LOGOUT":
      return {
        name: "",
        email: "",
        number: "",
        password: "",
      };

    default:
      return state;
  }
};

export default authReducer;
