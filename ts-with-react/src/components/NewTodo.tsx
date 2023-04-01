import React, { useRef } from "react";
import "../styles/NewTodo.css"

interface propsData{
  addNewTodo : (text:string)=>void
}
const NewTodo: React.FC<propsData> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.addNewTodo(enteredText)
  };
  return (
    <form className="form-control" onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
