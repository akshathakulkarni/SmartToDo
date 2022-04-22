import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed }) => {
  return (
    <div className="todo-item-container">
      <div className='alert alert-warning'>
      <h4>{todo.text}</h4>
      <div className="action-buttons">
        <button className="btn btn-warning">Mark As Completed</button>
        <button
          className="btn btn-danger"
          onClick={() => onRemovePressed(todo.text)}
        >
          Remove
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default TodoListItem;
