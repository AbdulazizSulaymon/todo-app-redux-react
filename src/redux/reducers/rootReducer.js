import { combineReducers } from "redux";
import globalReducer from "./global";
import todosReducer from "./todos";

const rootReducer = combineReducers({
  global: globalReducer,
  todos: todosReducer,
});

export default rootReducer;
