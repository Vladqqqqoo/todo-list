import React, {ChangeEvent, useEffect, useState} from "react";
import {v1} from "uuid";

const initTasks = [
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "HTML", isDone: true},
    {id: v1(), title: "CSS", isDone: true},
    {id: v1(), title: "REACT", isDone: false},
    {id: v1(), title: "ANGULAR", isDone: false},
];

function App() {
    const [tasks, setTasks] = useState(initTasks);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [filter, setFilter] = useState('All')

    const [title, setTitle] = useState('')

    useEffect(()=>{
        switch (filter) {
            case "Active": {
                setFilteredTasks(tasks.filter((el) => !el.isDone));
                break;
            }
            case "Completed": {
                setFilteredTasks(tasks.filter((el) => el.isDone));
                break;
            }
            default: {
                setFilteredTasks(tasks);
            }
        }
        return ()=>{
            console.log('bye')
        }
    },[filter, tasks])

    const handleClickDeleteTask = (id: string) => {
        const newTaskList = tasks.filter((t) => {
            // if (t.id !== id) {
            //     return true;
            // } else {
            //     return false;
            // }
            return t.id !== id
        });
        setTasks(newTaskList);
    };

    const handleFilterButtonClick = (filterName: string) => {
        setFilter(filterName);
    };

    const handleClickAddTask = () => {
        const formattedTitle = title.trim()
        if (formattedTitle) {
            // const isDone = filter === 'Completed' ? true : false;
            const isDone = filter === 'Completed'
            const newTask = {id: v1(), title: formattedTitle, isDone}
            setTasks([newTask, ...tasks])
            setTitle('')
        }
    }

    const handleAddNewTask = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const renderFilteredTasks = () => {
        return filteredTasks.map((el) => {
            return (
                <li key={el.id}>
                    <button
                        onClick={() => {
                            handleClickDeleteTask(el.id);
                        }}
                    >
                        delete
                    </button>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title} </span>
                </li>
            );
        });
    }
    return (
        <div>
            <h1>First Todolist</h1>
            <div>
                <input value={title} onChange={handleAddNewTask}/>
                <button onClick={handleClickAddTask}>Add Task</button>
            </div>
            <div>Custom list</div>
            <ul>{renderFilteredTasks()}</ul>
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


