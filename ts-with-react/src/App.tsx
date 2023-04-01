import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { AppCompInterface } from "./components/Interfaces";
import HomePage from "./components/homePage/HomePage";
import CounterPage1 from "./components/counter/CounterPage1";
import CounterOutput from "./components/counter/CounterOutput";
import CounterPage2 from "./components/counter/CounterPage2";
import CounterPage3 from "./components/counter/CounterPage3";

function App() {
  const [todos, setTodos] = useState<AppCompInterface[]>([]);

  const addTodo = (text: string) => {
    //we are calling a built-in function syntax prev,todos,abc anything can be written,syntax is imp
    // setTodos(prev=>[...prev,text]) this is updated version of setTodos([...prev,text])
    setTodos((prev) => [...prev, { id: Math.random().toString(), text: text }]);
  };

  // to delete todos
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((item) => {
        return item.id !== todoId;
      });
    });
  };
  return (
    <div className="App">
      <NewTodo addNewTodo={addTodo} />
      <TodoList items={todos} ondeleteTodo={todoDeleteHandler} />
      <HomePage />
      <CounterPage1 />
      <CounterPage2 />
      <CounterPage3 />

      <CounterOutput />
    </div>
  );
}

export default App;
