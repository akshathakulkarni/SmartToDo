import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './components/ToDoList';
import './App.css';


const App = () => {
  return (
    <div className='container'>
      <h3>SmartTodo</h3>
      <TodoList />
    </div>
  );
};

export default hot(module)(App);