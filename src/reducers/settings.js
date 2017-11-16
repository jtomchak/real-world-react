export default (state = {}, action) => {
  switch (action.type) {
    case "SETTINGS_SAVE":
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case "ASYNC_START":
      return {
        ...state,
        inProgress: true
      };
    default:
      return state;
  }
};
