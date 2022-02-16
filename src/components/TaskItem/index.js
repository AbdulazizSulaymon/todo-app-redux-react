import {
  faCheck,
  faEdit,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { EDIT_TASK, REMOVE_TASK } from "@types";
import Button from "@miniComponents/Button";
import { dispatch } from "@redux/store";
import { editTask, removeTask } from "@actions/todos";

const TaskItem = ({ listIndex, index, value, ...props }) => {
  const [isEdit, setEdit] = useState(false);
  const [text, setText] = useState(value.title);
  const refText = useRef();

  const handleEdit = () => {
    setEdit(false);
    editTask(listIndex, index, text);
  };

  const handleRemove = (index) => {
    removeTask(listIndex, index);
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
            <Button className={"mr-2"} size={"sm"} onClick={handleEdit}>
              <FontAwesomeIcon icon={faCheck} />
            </Button>
            <Button
              className={"mr-2"}
              variant="warning"
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
            variant="warning"
            size={"sm"}
            onClick={() => setEdit(true)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        )}
        <Button
          variant="danger"
          size={"sm"}
          onClick={() => handleRemove(index)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
