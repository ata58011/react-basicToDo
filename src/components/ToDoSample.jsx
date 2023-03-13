import { useState } from "react";

const ToDoSample = () => {
  const [mission, setmission] = useState("");
  const [missions, setmissions] = useState([]);

  let addTask = () => {
    let todo = {
      id: Math.floor(Math.random() * 1000),
      name: mission,
      isCompleted: false,
    };

    setmissions([...missions, todo]);
  };

  const changeToDoStatus = (id) => {
    let todo = missions.find((q) => q.id == id);
    todo.isCompleted = !todo.isCompleted;
    setmissions([...missions]);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          alignItems: "center",
        }}
      >
        <label htmlFor="">Task:</label>
        <input
          type="text"
          placeholder="Add a task"
          onChange={(e) => {
            return setmission(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          style={{ marginTop: "15px" }}
          onClick={() => {
            addTask();
          }}
        >
          Add Task
        </button>

        <button onClick={() => setmissions([])}>Clear All</button>
      </div>

      <ul>
        {missions.map((item) => {
          if (!item.isCompleted) {
            return (
              <li
                style={{ cursor: "pointer" }}
                onClick={() => changeToDoStatus(item.id)}
                key={item.id}
              >
                {item.name}
              </li>
            );
          } else {
            return (
              <li
                style={{ cursor: "pointer", textDecoration:"line-through"}}
                onClick={() => changeToDoStatus(item.id)}
                key={item.id}
              >
                {item.title}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ToDoSample;
