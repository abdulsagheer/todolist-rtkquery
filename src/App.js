import { useState } from "react";
import "./App.css";
import { useGetTodosQuery } from "./feature/api/apiSlice";

function App() {
  const [todo, setTodo] = useState("");
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      // logic to add todo using RTK Query
      setTodo("");
    }
  };

  let content;
  if (content) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = todos.map((todo) => (
      <ul>
        <li className={todo.completed ? "checked" : ""}>
          {todo.title}
          <span className="close">x</span>
        </li>
      </ul>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div className="App">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <h2>My To Do List</h2>
          <input
            type="text"
            placeholder="Your Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="addBtn" type="submit">
            Add
          </button>
        </form>
      </div>
      {content}
    </div>
  );
}

export default App;
