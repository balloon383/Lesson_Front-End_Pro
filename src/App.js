import React, { useState, useEffect } from 'react'
import TodoHeader from './components/header/header.jsx';
import TodoList from './components/list/list.jsx';
import Tools from './components/tools/tools.jsx';
import getTodos, { deleteTodos, postTodos, putTodos} from './api.js'
import './App.css';

export default function App() {
  
  
  let [todoData, setTodoData] = useState([]);
  let [todoData2, setTodoData2] = useState([]);
  let [filter, setFilter] = useState(`All`);
  
  useEffect(() => {
    async function fetchTodos() {
      const todos = await getTodos();
      setTodoData(todos);
    }
    fetchTodos();
  }, []);
  

  useEffect(() => {
    if (filter === 'Completed') {
      const completed = todoData.filter((el) => el.completed)
      console.log(todoData.completed)
      setTodoData2(completed);

    } else if (filter === 'Pending') {
      const pending = todoData.filter((el) => !el.completed)
      setTodoData2(pending);

    } else {
      setTodoData2(todoData)
    }
  
  }, [filter, todoData])
    



  async function createObject(data1, data2) {
    
    let newObj = 
    {
      title: data1,
      description: data2,
    }
    let serverObj = await postTodos(newObj)

    setTodoData(prevTodoData => {
      console.log(serverObj)
      if (!prevTodoData.some((item) => item.id === serverObj.id)) {
        prevTodoData.push(serverObj);
      }
      return [...prevTodoData];

    })

  }

  const updateTodo = async (todo) => {
    const updatedTodoArr = todoData.map((el) => {
      if (el.id === todo.id) {
        el = todo
        return el
      } else {
        return el
      }
    })
    setTodoData(updatedTodoArr);
    putTodos(todo)
  }

  const deleteItem = async (id) => {

    let deleted = await deleteTodos(id)

    todoData = todoData.filter((el) => el.id !== id);
    
    setTodoData(todoData);
  };
  
  async function sortAll() {
    setFilter('All')
  }

  function sortByPending(){
    setFilter('Pending');
  }

  function sortByCompleted(){
    setFilter("Completed");
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
            todoProps={todoData2}
            deleteItem={deleteItem}
            updateTodo={updateTodo}
          />
        </section>
      </section>
    </div>
  );
  
}


