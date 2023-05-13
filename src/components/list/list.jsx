import './style.css';
import NewTodo from './new/new-todo.jsx'
import React, { useState, useEffect } from 'react'

export default function TodoList({ todoProps, deleteItem }) {

  const handleDelete = (id) => {
    deleteItem(id)
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
              {todoProps.map(todo => <NewTodo todoData={todo} key={todo.id} id={todo.id} deletion={handleDelete}/>)}
        </tbody>
      </table>
    </section>
  )

}
