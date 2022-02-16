import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@miniComponents/Button";
import { ADD_TASK, TOGGLE_THEME } from "@types";
import {
  TaskItem,
  ListContainer,
  TaskList,
  Header,
  AddForm,
  // {Button}
} from "@components";

export default function TodoApp() {
  const tasks = useSelector((state) => state.todos.tasks);

  const dispatch = useDispatch();

  const addTask = (value) => {
    dispatch({ type: ADD_TASK, payload: value });
  };

  return (
    <div className="container py-8 px-2 dark:bg-slate-700">
      <Header />

      <h1 className="text-5xl text-center ">Todo App</h1>

      <ListContainer>
        <AddForm submit={addTask} placeholder="Write new task" />
        <TaskList tasks={tasks} />
      </ListContainer>
    </div>
  );
}
