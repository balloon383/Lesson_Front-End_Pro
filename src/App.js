import React, { useState, useEffect } from 'react'
import TodoHeader from './components/header/header.jsx';
import TodoList from './components/list/list.jsx';
import Tools from './components/tools/tools.jsx';
import getTodos, { deleteTodos, postTodos, putTodos} from './api.js'
import './App.css';

export default function App() {
  
  let [todoData, setTodoData] = useState({
    todos: [],
  });
  
  
  useEffect(() => {

    async function fetchTodos() {
      const todos = await getTodos()
      setTodoData(todoData.todos = todos);
    }
    fetchTodos();
  }, []);

  async function createObject(data1, data2) {
    
    let newObj = 
    {
      title: data1,
      description: data2,
    }
    let serverObj = await postTodos(newObj)

    setTodoData( prevTodoData => {
      prevTodoData.push(serverObj);
      return [...prevTodoData]
    })

  }

  const updateTodo = async (todo) => {
    console.log(todo)
    putTodos(todo)

  }

  const deleteItem = async (id) => {

    let deleted = await deleteTodos(id)

    todoData = todoData.filter((el) => el.id !== id);
    
    setTodoData(todoData);
  };

  async function sortAll() {
    console.log(`all`)
    
  }

  function sortByPending(){
    console.log(`pend`);
    
  }

  function sortByCompleted(){
    console.log(`comp`);
    
  }

  return (
    <div className="App">
      <section className="todo">
        <section className="content__container">
          <h2 className="todo__header">Todo Application</h2>
          <TodoHeader setData={createObject} />
          <Tools
            sortAll={sortAll}
            sortByPending={sortByPending}
            sortByCompleted={sortByCompleted}
          />
          <TodoList
            todoProps={todoData}
            deleteItem={deleteItem}
            updateTodo={updateTodo}
          />
        </section>
      </section>
    </div>
  );
  
}


