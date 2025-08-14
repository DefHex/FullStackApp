import "../App.css"
import axios from "axios";
import {type FormEvent, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

type InputProps = { fetchTodos?: () => void }

export default function InputTodo({fetchTodos}: Readonly<InputProps>) {
    const [description, setDescription] = useState<string>("");

    function postNewTodo (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        axios.post("/api/todo",{
            description: description.toString(),
            status: "OPEN"
        }).then(fetchTodos)
            .catch(error => {
                console.error("Error posting new todo:", error);
                alert("Error posting new todo: " + error.message);
            })
        setDescription("");
    }

    return (
        <div>
            <form onSubmit={postNewTodo}>
                <input type={"text"}
                       placeholder={"Input your task here"}
                       value={description}
                       onChange={(e) =>
                            setDescription(e.target.value)
                }/>
                <button type={"submit"}> Add <FontAwesomeIcon icon={faPlus} /></button>
            </form>
        </div>
    );
}