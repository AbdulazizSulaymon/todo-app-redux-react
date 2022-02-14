import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../components/Button";

const Item = ({ index, value, ...props }) => {
  const [isEdit, setEdit] = useState(false);
  const [text, setText] = useState(value.title);
  const refText = useRef();

  const dispatch = useDispatch();

  const editTask = () => {
    setEdit(false);
    dispatch({ type: "EDIT_TASK", payload: { index, text } });
  };

  const removeTask = (index) => {
    dispatch({ type: "REMOVE_TASK", payload: index });
  };

  useEffect(() => {
    isEdit && refText.current.focus();
  }, [isEdit]);

  return (
    <li
      key={index}
      className="px-3 py-2 border rounded-lg mb-3 shadow flex justify-between items-center"
      {...props}
    >
      {(isEdit && (
        <input
          ref={refText}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-1 mr-2 outline-none rounded-lg transition-all border-2 border-transparent focus:border-gray-300"
        />
      )) || <span>{value.title}</span>}
      <div>
        {isEdit ? (
          <>
            <Button className={"mr-2"} size={"sm"} onClick={editTask}>
              <FontAwesomeIcon icon={faCheck} />
            </Button>
            <Button
              className={"mr-2"}
              type="warning"
              size={"sm"}
              onClick={() => {
                setEdit(false);
                setText(value.title);
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </>
        ) : (
          <Button
            className={"mr-2"}
            type="warning"
            size={"sm"}
            onClick={() => setEdit(true)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        )}
        <Button
          className={"mr-2"}
          type="danger"
          size={"sm"}
          onClick={() => removeTask(index)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </li>
  );
};

export default function TodoApp() {
  const layout = useSelector((state) => state.layout);
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const addTask = () => {
    if (value.trim() == "") return;

    dispatch({ type: "ADD_TASK", payload: value });
    setValue("");
  };

  useEffect(() => {
    if (layout.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [layout.theme]);

  return (
    <div className="container mx-auto py-8 dark:bg-slate-700">
      <header>
        <button
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          {layout.theme}
        </button>
      </header>

      <h1 className="text-5xl text-center ">Todo App</h1>

      <div className="w-6/12 mx-auto mt-5">
        <div className="flex flex-1 items-center">
          <input
            className="border-2 flex-1 rounded-lg px-3 py-2 shadow mr-2 outline-none focus:border-gray-600 transition-all"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={addTask}>Add</Button>
        </div>
        <ul className="mt-4">
          {tasks.map((item, index) => (
            <Item index={index} value={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
