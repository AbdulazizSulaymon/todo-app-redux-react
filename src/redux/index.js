import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  layout: {
    theme: "light",
  },
  tasks: [{ title: "task 01", completed: false }],
};

const reducer = (state = initialState, action) => {
  let oldTasks;
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        layout: {
          ...state.layout,
          theme: state.layout.theme === "dark" ? "light" : "dark",
        },
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { title: action.payload, completed: false }],
      };
    case "EDIT_TASK":
      oldTasks = [...state.tasks];
      oldTasks[action.payload.index].title = action.payload.text;
      return {
        ...state,
        tasks: [...oldTasks],
      };
    case "REMOVE_TASK":
      oldTasks = [...state.tasks];
      oldTasks.splice(action.payload, 1);
      return {
        ...state,
        tasks: [...oldTasks],
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

// store - omborxona, qiymatlar saqlanadigan joy, bank - katta bir obyekt
// const store = {
//   layout: {
//     openDrawer: false,
//     theme: "light",
//   },
//   user: { login: "", img: "", token: "" },
//   category: [],
//   products: [],
// };

// reducer - qora ishchi, togridan togri store bilan ishlaydi omborxonachi

// dispatch - funksiyalar toplamidan foydalanish, buyruq, pult
