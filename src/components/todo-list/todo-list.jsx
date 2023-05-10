import './style.css';
import NewTodo from './new-todo/new-todo.jsx'
import React, { useState, useEffect } from 'react'

export default function TodoHeader(props) {

  const { update } = props.todoProps
  
  const [todoData, updateTodoData] = useState([])
  
  useEffect(() => {
    
    console.log(`didUpdate`)
    
    updateTodoData(props.todoProps) 
  
  }, [update])
  
  
  
  
  return (
    <section className='list__body'>
        <tbody className='list__table'>
            <tr className='list__row'>
                <td><input type="checkbox"/></td>
                <td>Name</td>
                <td>Description</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
            {todoData.map(todo => <NewTodo todoData={todo} />)}
        </tbody>
    </section>
  )

}
