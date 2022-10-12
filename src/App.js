import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      // logic to add todo using RTK Query
      setTodo("");
    }
  };

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
      <ul>
        <li className="checked">
          Reading Book
          <span className="close">x</span>
        </li>
        <li>
          Watching Movies
          <span className="close">x</span>
        </li>
      </ul>
    </div>
  );
}

export default App;
