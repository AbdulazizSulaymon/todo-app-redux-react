import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ListContainer, TaskList, Header, AddForm } from "@components";
import { addTask, addList } from "@actions/todos";

export default function TodoApp() {
  const lists = useSelector((state) => state.todos.lists);

  return (
    <div className="container py-8 px-2 dark:bg-slate-700">
      <Header />

      <h1 className="text-5xl text-center ">Todo App</h1>

      <div className="flex items-start gap-5">
        {lists.map((list, index) => (
          <ListContainer key={index}>
            <p>{list.title}</p>
            <AddForm
              submit={(value) => addTask(index, value)}
              placeholder="Write new task"
            />
            <TaskList listIndex={index} tasks={list.tasks} />
          </ListContainer>
        ))}
        <ListContainer>
          {/* <p>,</p> */}
          <AddForm submit={(v) => addList(v)} placeholder="Add new list" />
        </ListContainer>
      </div>
    </div>
  );
}
