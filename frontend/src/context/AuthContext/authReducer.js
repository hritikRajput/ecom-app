const authReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      console.log({ ...state });
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
