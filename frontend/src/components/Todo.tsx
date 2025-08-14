import "../App.css"
// import {type RefObject, useRef} from "react";
import axios from "axios";
import type {todoType} from "../types/TodoType.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faForward, faTrash} from "@fortawesome/free-solid-svg-icons";

type TodoProps = {
    todo: { description: string; id: string; status: string },
    fetchTodos: () => void
}

function DeleteRequest(todo: todoType, fetchTodos: () => void) {
    console.log("Delete request sent");
    const todoId = todo.id;

    axios.delete("api/todo/" + todoId)
        .then(
            response => {
                console.log("Todo deleted successfully:", response.data);
                fetchTodos();
            }
        )
        .catch(error => {
            console.error("Error deleting todo:"+ error);
            alert("Error deleting"+ todo.status +" todo: " + error.message);}
        )
}
function Advance(todo: todoType, fetchTodos: () => void) {
    console.log("Advance request sent");
    const todoId = todo.id;
    // "OPEN" ,
        // "IN_PROGRESS" ,
        // "DONE"
    function changeStatus (todo:todoType)         {
        switch (todo.status){
            case "OPEN":
                return "IN_PROGRESS";
            case "IN_PROGRESS":
                return  "DONE";
        }
    }

    axios.put("api/todo/" + todoId, {status: changeStatus(todo), description: todo.description, id: todo.id})
        .then(
            response => {
                console.log("Todo advanced successfully:", response.data);
                fetchTodos();
            }
        )
        .catch(error => {
            console.error("Error advancing todo:"+ error);
            alert("Error advancing"+ todo.status +" todo: " + error.message);}
        )
}

export default function Todo({todo,fetchTodos}: TodoProps) {
    return (
        <>
            {todo.description === ""}
            <div className={"todo-item"}>
                <h2>{todo.description}</h2>
                {/*<button>Edit <FontAwesomeIcon icon={faPencil} /></button>*/}
                {todo.status!=="DONE" ?
                    <button onClick={() => Advance(todo,fetchTodos)} className={"advance-button"}>Advance <FontAwesomeIcon icon={faForward} /></button>:
                    <button onClick={() => DeleteRequest(todo,fetchTodos)} className={"delete-button"}>Delete <FontAwesomeIcon icon={faTrash} /></button>
                }
            </div>
        </>
    )
}

