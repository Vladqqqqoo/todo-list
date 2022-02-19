import React, { useState } from "react";

const initTasks = [
  { id: 1, title: "JS", isDone: true },
  { id: 2, title: "HTML", isDone: true },
  { id: 3, title: "CSS", isDone: true },
  { id: 4, title: "REACT", isDone: false },
  { id: 5, title: "ANGULAR", isDone: false },
];

function App() {
  const [tasks, setTasks] = useState(initTasks);

  console.log("rerener");

  const handleClick = (id: number) => {
    const newTaskList = tasks.filter((t) => {
      if (t.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTasks(newTaskList);
  };

  const handleFilterButtonClick = (filterName: string) => {
    switch (filterName) {
      case "Active": {
        setTasks(initTasks.filter((el) => !el.isDone));
        console.log("active");
        break;
      }
      case "Completed": {
        setTasks(initTasks.filter((el) => el.isDone));
        console.log("completed");
        break;
      }
      default: {
        setTasks(initTasks);
        console.log("all or smth");
      }
    }
  };

  const taskListArr = tasks.map((el) => {
    return (
      <li key={el.id}>
        <button
          onClick={() => {
            handleClick(el.id);
          }}
        >
          delete
        </button>
        <input type="checkbox" checked={el.isDone} />
        <span>{el.title} </span>
      </li>
    );
  });

  return (
    <div>
      <div>
        <input />
        <button>+</button>
      </div>
      <div>Custom list</div>
      <ul>{taskListArr}</ul>
      <div>
        <button
          onClick={() => {
            handleFilterButtonClick("All");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            handleFilterButtonClick("Active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            handleFilterButtonClick("Completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default App;

/* imrpove callback in order not to create new function on each re-render */
// <button onClick={() => {handleFilterButtonClick('All')}}>All</button>
