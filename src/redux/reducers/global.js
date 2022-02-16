import { TOGGLE_THEME } from "../types";

const initialState = { theme: "light" };

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    default:
      return state;
  }
};

export default globalReducer;
