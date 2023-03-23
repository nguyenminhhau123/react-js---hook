import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav.js";
import Todo from "./views/Todo";

function App() {
  // state
  let [name, setName] = useState("minh hau");
  let [address, setAddress] = useState("");
  let [todos, setTodo] = useState([
    { id: "todo1", title: "hoc lap trinh cơ ban", type: "hau" },
    { id: "todo2", title: "hoc lap trinh", type: "hau" },
    { id: "todo3", title: "cơ ban", type: "minh" },
    { id: "todo4", title: "cơ ban", type: "minh" },
  ]);
  useEffect(() => {
    console.log("run useEffect");
  }, [address]);
  const handleEventClick = () => {
    // hook not marge state
    if (!address) {
      alert("emtmyp item");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: address,
      type: "hau",
    };
    setTodo([...todos, newTodo]);
    setAddress("");
  };
  const handleEventOnchange = (event) => {
    setAddress(event.target.value);
  };
  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodo(currentTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>code with {name}</p>
        <Todo todos={todos} title="All todo" deleteDataTodo={deleteDataTodo} />

        <Todo
          todos={todos.filter((item) => item.type === "hau")}
          title={`hau'todo`}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleEventOnchange(event)}
        ></input>
        <button
          onClick={() => {
            handleEventClick();
          }}
        >
          click me
        </button>
      </header>
    </div>
  );
}

export default App;
