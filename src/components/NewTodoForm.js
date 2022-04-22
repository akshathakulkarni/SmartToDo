import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import './NewTodoForm.css';

//Because of mapStateToProps and NewToDoForm being passed to connect
//function, NewTodoForm will get todos as a prop automatically
const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className="new-todo-form">
      <div className='alert alert-warning'>
      <input
          className="form-control"
          style={{border: '1px solid #FFAE42'}}
          type="text"
          placeholder="Type your new todo here"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <div className='add-todo'>
        <button
        className='btn btn-warning'
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
        
      </div>
        
      
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
