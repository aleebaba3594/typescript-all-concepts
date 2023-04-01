import React from "react";
import "../styles/TodoList.css";

interface todoListProps {
  items: { id: string; text: string }[];
  ondeleteTodo: (id: string) => void;
}
const TodoList: React.FC<todoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <li key={index}>
            {" "}
            <span>{item.text}</span>
            <button
              onClick={() => {
                props.ondeleteTodo(item.id);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
