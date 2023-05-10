import React from 'react'

export default function NewTodo(props) {

  function changeStatus(){
    if(props.todoData.status == 'Pending' ){
      props.todoData.status = 'Completed'
    } 
  }
 
  return (
    <tr className='list__row'>
        <td><input type="checkbox"/></td>
        <td>{props.todoData.title}</td>
        <td>{props.todoData.description}</td>
        <td onClick={changeStatus}>{props.todoData.status}</td>
        <td>Edit Delete</td>
    </tr>
  )
}
