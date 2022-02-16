import * as t from "../types";

const initialState = {
  tasks: [{ title: "task 01", completed: false }],
};

const todosReducer = (state = initialState, action) => {
  let oldTasks;
  switch (action.type) {
    case t.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { title: action.payload, completed: false }],
      };
    case t.EDIT_TASK:
      oldTasks = [...state.tasks];
      oldTasks[action.payload.index].title = action.payload.text;
      return {
        ...state,
        tasks: [...oldTasks],
      };
    case t.REMOVE_TASK:
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

export default todosReducer;
