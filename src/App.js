import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { hot } from 'react-hot-loader';
import TodoList from './components/ToDoList';
import './App.css';


const App = () => {
  return (
    <div className='container'>
      <div className='title-icon'>
      
      <img src='Checklist-icon.png' width='50' height='50'/>
      </div>
      <div className='title-name'><h3 className='title-name'>SmartTodo</h3></div>
      
      <TodoList />
    </div>
  );
};

export default hot(module)(App);