import React, { useState } from "react";

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, title: "JS", isDone: true },
    { id: 2, title: "HTML", isDone: true },
    { id: 3, title: "CSS", isDone: true },
    { id: 4, title: "REACT", isDone: false },
    { id: 5, title: "ANGULAR", isDone: false },
  ]);

  const handleClick = (id: number) => {
    const newTaskList = tasks.filter((t) => {
      if (t.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTasks(newTaskList);

    console.log(tasks);
  };

  const taskListArr = tasks.map((el) => {
    return (
      <li key={el.id}>
        <input type="checkbox" checked={el.isDone} />
        <span>{el.title} </span>
        <button
          onClick={() => {
            handleClick(el.id);
          }}
        >
          delete
        </button>
      </li>
    );
  });

  return (
    <div>
      <div>Custom list</div>
      <ul>{taskListArr}</ul>
    </div>
  );
}

export default App;
