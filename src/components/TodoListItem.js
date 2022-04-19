import React from "react";

const TodoListItem = ({ todo }) => {
  console.log('1111 = ', todo)
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="button-container">
        <button className="completed-button">Mark As Completed</button>
        <button className="remove-button">Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
