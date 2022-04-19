import React, { useState } from "react";

const NewTodoForm = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefualt();
  };
  return (
    <div className="new-todo-form">
      <form classname='form-control'>
        <input
          className="new-todo-input"
          type="text"
          placeholder="Type your new todo here"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button
          className="btn"
          type="submit"
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
