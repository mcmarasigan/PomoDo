import React from 'react'
import TodoList from "./components/TodoList";
import Navbar from './components/Navbar';
function TaskList() {
  return (
    <div>
    <Navbar className="nav tasklist"/>


    <div className="todo-app">

        <TodoList />
      </div>
      </div>
  )
}

export default TaskList
