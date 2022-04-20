import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";

//Because of mapStateToProps and NewToDoForm being passed to connect
//function, NewTodoForm will get todos as a prop automatically
const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className="new-todo-form">
        <input
          className="new-todo-input"
          type="text"
          placeholder="Type your new todo here"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button
          onClick={() => {
            const isDuplicateText = todos.some((todo) => todo.text === newTodo);
            if (!isDuplicateText) {
              onCreatePressed(newTodo);
              setNewTodo("");
            }
          }}
        >
          Add Todo
        </button>
      
    </div>
  );
};

//mapStateToProps takes in the current state from redux, and
//returns pieces of that state that the component needs access to.

const mapStateToProps = (state) => ({
  todos: state.todos,
});

//mapDispatchToProps takes in dispatch which is a function that allows
//components to trigger actions that Redux Store will respond to.
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

//connect is used to connect components to the redux store.
//We need to return the connected version of the component.
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
