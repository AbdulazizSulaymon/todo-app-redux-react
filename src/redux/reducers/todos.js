import { getShallowCopy } from "@functions";
import * as t from "../types";

const initialState = {
  lists: [
    {
      title: "List 01",
      tasks: [{ title: "task 01", completed: false }],
    },
    {
      title: "List 02",
      tasks: [{ title: "task one", completed: true }],
    },
  ],
};

const todosReducer = (state = initialState, action) => {
  let s = getShallowCopy(state);
  let indexList = action.payload?.listIndex || 0;
  let indexTask = action.payload?.indexTask || 0;
  let titleTask = action.payload?.titleTask || 0;

  switch (action.type) {
    case t.ADD_LIST:
      s.lists.push({ title: action.payload, tasks: [] });
      break;

    case t.ADD_TASK:
      s.lists[indexList].tasks.push({
        title: titleTask,
        completed: false,
      });
      break;
    case t.EDIT_TASK:
      s.lists[indexList].tasks[indexTask].title = titleTask;
      break;
    case t.REMOVE_TASK:
      s.lists[indexList].tasks.splice(indexTask, 1);
      break;
  }

  return { ...s };
};

export default todosReducer;
