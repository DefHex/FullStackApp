import "../App.css"

type TodoProps= {
    todo: { description: string; id: string; status: string }
}

export default function Todo({todo}: TodoProps) {
    return(
        <>
            {todo.description === ""}
            <div className={"todo-item"}>
                <h1>{todo.description}</h1>
                <p>Status: {todo.status}</p>
                <p>ID: {todo.id}</p>
            </div>
        </>
    )
}

