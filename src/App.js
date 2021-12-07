import './App.css';
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  function addOneItem(str) {
    setTasks([...tasks, { content: str, done: false }]);
  }

  function deleteOneItem(str) {
    const newArr = tasks.filter((task) => task.content !== str);
    setTasks(newArr);
  }

  function setItemToTrue(str) {
    const newArr = tasks.map((task) => {
      if (task.content === str) {
        task.done = !task.done;
        return task;
      }
      return task;
    });
    setTasks(newArr);
  }

  return (
    <div>
      <TodoInput addOneItem={addOneItem} />
      <ul>
        {tasks.map((task) => {
          return (
            <TodoItem
              onDelete={deleteOneItem}
              onClick={setItemToTrue}
              done={task.done}
            >
              {task.content}
            </TodoItem>
          );
        })}
      </ul>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <h1>To-Do-List</h1>
      <div className="App-header">
        <div className="wrapper">
          <div className="Input-wrapper">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
