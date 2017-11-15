const defaultState = {
  appName: "Meowdium",
  articles: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "APP_LOAD":
      return { ...state };
    case "REDIRECT":
      return { ...state, redirectTo: null };
    case "LOGIN":
      return {
        ...state,
        redirectTo: action.error ? null : "/",
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      };
    default:
      return state;
  }
};
