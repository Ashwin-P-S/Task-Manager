import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", description: "" });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/tasks");
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const addTask = async () => {
        try {
            await axios.post("http://localhost:5000/api/tasks", newTask);
            setNewTask({ title: "", description: "" });
            fetchTasks();
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const updateTask = async (taskId, updatedTask) => {
        try {
            await axios.put(
                `http://localhost:5000/api/tasks/${taskId}`,
                updatedTask
            );
            fetchTasks();
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
            fetchTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <br />
            <div>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={(e) =>
                        setNewTask({ ...newTask, title: e.target.value })
                    }
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Task Description"
                    value={newTask.description}
                    onChange={(e) =>
                        setNewTask({ ...newTask, description: e.target.value })
                    }
                />
                <br />
                <br />
                <button onClick={addTask} className="btn">
                    Add Task
                </button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        <strong>{task.title}</strong> - {task.description}
                        &nbsp;
                        <button
                            className="btn"
                            onClick={() =>
                                updateTask(task._id, {
                                    ...task,
                                    completed: !task.completed,
                                })
                            }
                        >
                            {task.completed
                                ? "Mark Incomplete"
                                : "Mark Complete"}
                        </button>
                        &nbsp;
                        <button
                            onClick={() => deleteTask(task._id)}
                            className="btn"
                        >
                            Delete
                        </button>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
