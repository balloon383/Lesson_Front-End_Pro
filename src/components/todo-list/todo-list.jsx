import './style.css';
import NewTodo from './new-todo/new-todo.jsx'
import React, { useState, useEffect } from 'react'

export default function TodoList({ todoProps }) {
  
  let [todoPropsArr, updateTodoPropsArr] = useState(todoProps)

  useEffect(() => {
    updateTodoPropsArr(todoProps);
  }, [todoProps]);

  const deleteItem = (id) => {
    const updatedTodoPropsArr = todoPropsArr.filter((el) => el.id !== id);
    updateTodoPropsArr(updatedTodoPropsArr);
  }

  return (
    <section className='list__body'>
      <table>
        <tbody className='list__table'>
              <tr className='list__row'>
                  <td><input type="checkbox"/></td>
                  <td>Name</td>
                  <td>Description</td>
                  <td>Status</td>
                  <td>Action</td>
              </tr>
              {todoPropsArr.map(todo => <NewTodo todoData={todo} key={todo.id} id={todo.id} deletion={deleteItem}/>)}
        </tbody>
      </table>
    </section>
  )

}
