import Todo from './components/Todo'
import './App.css'
import {type TodoStatusTypes, todoStatusTypes} from './types/TodoStatusTypes'
import {useEffect, useState} from "react";
import axios from "axios";
import type {todoType} from "./types/TodoType.ts";
import InputTodo from "./components/InputTodo.tsx";

function App() {

    const [todos, setTodos] = useState<todoType[]>([]);
    const fetchTodos = () => {
        axios.get("api/todo").then(response => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    };

    useEffect(fetchTodos, []);


  return (
    <div className="App">

        {todoStatusTypes.map((status:TodoStatusTypes) => {
            return (
                <div key={status} className={status.toString()}>
                    <h2>{status.toString() !== "IN_PROGRESS" ? status : "IN PROGRESS"}</h2>
                    {todos.filter(todo => todo.status === status).map(todo => (
                        <Todo key={`${status}-${todo.id}`} todo={todo}   fetchTodos={fetchTodos}/>
                    ))}
                </div>
            )
        })}
        <div className="bottom-bar">
            <InputTodo fetchTodos={fetchTodos}/>
        </div>
    </div>
  )
}

export default App
