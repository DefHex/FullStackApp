import Todo from './components/Todo'
import './App.css'
import {type TodoStatusTypes, todoStatusTypes} from './types/TodoStatusTypes'


function App() {

    const Todos=[
        {
            "description": "4",
            "id": "dc5d1e40-f840-46a6-93b8-9f948dbe7218",
            "status": "DONE"
        },
        {
            "description": "5",
            "id": "0c099ef6-213c-46e8-8344-c49a84207f24",
            "status": "IN_PROGRESS"
        },
        {
            "description": "1",
            "id": "f875643e-e0fe-4ead-97a7-8f25f875de69",
            "status": "OPEN"
        },
        {
            "description": "2",
            "id": "12b86f41-cf5e-45aa-a545-bfed0a45fb36",
            "status": "OPEN"
        },
        {
            "description": "3",
            "id": "9078b32e-2c5e-4339-bcd3-871ed495d126",
            "status": "OPEN"
        },
        {
            "description": "New sentence",
            "id": "fab3d3bc-3761-4d90-9e7b-f7fc09d83784",
            "status": "OPEN"
        },
        {
            "description": "Feed the dog.",
            "id": "94150512-5ea1-401e-9540-15ab0f635772",
            "status": "IN_PROGRESS"
        },
        {
            "description": "Feed the cat",
            "id": "26205331-1f2d-420f-a985-1d69175499f1",
            "status": "IN_PROGRESS"
        },
        {
            "description": "Do taxes.",
            "id": "10c9aba3-f07e-427f-ae49-66e91b6f0cc3",
            "status": "IN_PROGRESS"
        },
        {
            "description": "Finish API project",
            "id": "c8fee8e6-8a4b-4c9c-bcf6-c8f9057876e9",
            "status": "IN_PROGRESS"
        },
        {
            "description": "buy groceries",
            "id": "a39b2d86-aa33-4139-b9e4-587fad480de2",
            "status": "OPEN"
        },
        {
            "description": "Pet the cat",
            "id": "1398e031-89e1-434f-b5b0-b4f26b8ee1f9",
            "status": "OPEN"
        }
    ]


  return (
    <div className="App">
        {todoStatusTypes.map((status:TodoStatusTypes) => {
            return (
                <div key={status} className={{status: status}.toString()}>
                    <h2>{status.toString() !== "IN_PROGRESS" ? status : "IN PROGRESS"}</h2>
                    {Todos.filter(todo => todo.status === status).map(todo => (
                        <Todo key={`${status}-${todo.id}`} todo={todo} />
                    ))}
                </div>
            )
        })}
    </div>
  )
}

export default App
