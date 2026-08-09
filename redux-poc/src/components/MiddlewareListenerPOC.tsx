import { useState } from "react";
import { Provider } from "react-redux";

import { middlewareStore } from "../redux/middlewareStore";

import {
  addTask,
  toggleTask,
  deleteTask,
} from "../redux/slices/taskSlice";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import type {
  MiddlewareDispatch,
  MiddlewareRootState,
} from "../redux/middlewareStore";

function TaskManager() {
  const dispatch = useDispatch<MiddlewareDispatch>();

  const tasks = useSelector(
    (state: MiddlewareRootState) => state.task.tasks
  );

  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (!title.trim()) return;

    dispatch(addTask(title));

    setTitle("");
  };

  return (
    <div>
      <h1>Middleware & Listener Middleware</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleAddTask}>
        Add Task
      </button>

      <hr />

      {tasks.length === 0 && <p>No Tasks</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.title} {" "}
              {task.completed ? "✅" : "❌"}
            </span>

            <button
              onClick={() =>
                dispatch(toggleTask(task.id))
              }
            >
              Complete
            </button>

            <button
              onClick={() =>
                dispatch(deleteTask(task.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MiddlewareListenerPOC() {
  return (
    <Provider store={middlewareStore}>
      <TaskManager />
    </Provider>
  );
}