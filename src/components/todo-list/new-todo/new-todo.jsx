import React from 'react'

export default function NewTodo(props) {
  console.log(props)
  return (
    <tr className='list__row'>
        <td><input type="checkbox"/></td>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>{props.status}</td>
        <td>Edit Delete</td>
    </tr>
  )
}
