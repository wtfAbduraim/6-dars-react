import React from "react";
import "./App.css";
import Delete from "./Delete/delete"

function App() {
  // const [todos, setTodos] = React.useState([
  //   {
  //     id: 0,
  //     title: "salom dunyo",
  //     bool: true,
  //   },
  // ]);

  
  // const handleDelete = (evt) => {
  //   const todoId = evt.target.dataset.todoId - 0;

  //   const filteredTodos = todos.filter((row) => row.id !== todoId);
  //   setTodos([...filteredTodos]);
  // }
  return (
    <>
      {/* <main className="main">
        <input
          type="text"
          onKeyUp={(evt) => {
            if (evt.code === "Enter") {
              const newTodos = {
                id: todos[todos.length - 1]?.id + 1 || 0,
                title: evt.target.value.trim(),
                bool: true,
              };

              setTodos([...todos, newTodos]);

              evt.target.value = null;
            }
          }}
          placeholder="yoz.."
        />

        <ul className="todos"  handleDelete={handleDelete}>
          {todos.length > 0 &&
            todos.map((todos) => (
              <Delete key={todos.id} id={todos.id} handleDelete={handleDelete}>
              {todos.title}
              <input type="checkbox" className="checkbox" />
            </Delete>
            ))}
        </ul>
      </main> */}
    </>
  );
}

export default App;
