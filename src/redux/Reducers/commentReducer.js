function commentReducer(state = {}, action) {
  switch (action.type) {
    case "COMMENT":
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default commentReducer;
