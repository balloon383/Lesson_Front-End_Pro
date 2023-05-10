import React, { useState, useEffect } from 'react'
import TodoHeader from './components/todo-header/todo-header.jsx';
import TodoList from './components/todo-list/todo-list.jsx';
import './App.css';

export default function App() {
  
  const [todoData, setTodoData] = useState([])

  function handleData(data1, data2){
    let obj = 
    {
      title: data1,
      description: data2,
      status: 'Pending'
    }
    setTodoData(todoData.push(obj))
    console.log(todoData)
  }
  
  return (
    <div className="App">
      <section className='todo'>
        <section className='content__container'>
          <h2 className='todo__header'>Todo Application</h2>
          <TodoHeader setData={handleData}/>
          <TodoList todoProps={todoData}/>
        </section>
      </section>
      
    </div>
  );
  
}


