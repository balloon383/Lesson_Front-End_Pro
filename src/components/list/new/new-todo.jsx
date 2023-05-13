import React, { useState } from 'react'
import './style.css'

export default function NewTodo(props) {
  const [titleValue, updateTitle] = useState(props.todoData.title)
  const [descriptionValue, updateDescription] = useState(props.todoData.description)
  const [status, updateStatus] = useState(props.todoData.completed ? 'Completed' : 'Pending')
  const [statusClass, updateStatusClass] = useState(props.todoData.completed ? 'list__status--green' : 'list__status--red')
  const [readOnly, updateReadOnly] = useState(true)
  const [statusChecker, updateStatusChecker] = useState(props.todoData.completed)

  function changeTodo() {
    if (readOnly === true) {
      updateReadOnly(false)
    }
  }

  function handleDelete(){
    props.deletion(props.id)
    console.log(props.id)
  }

  function updateItem(){
    if(readOnly === true){
      updateReadOnly(false)
    } else{
      updateReadOnly(true)

      let obj = {
        title: titleValue,
        description: descriptionValue,
        id: props.todoData.id,
        completed: props.todoData.completed 
      }

      props.updating(obj)
    }
  }
  function updateServerStatus() {
    let status = statusChecker
    
    if (status === true) {
      status = false
      updateStatusChecker(status)
      updateStatusClass('list__status--red')
      updateStatus('Pending')
    } else {
      status = true
      updateStatusChecker(status)
      updateStatusClass('list__status--green')
      updateStatus('Completed')
    }

    let obj = {
        title: titleValue,
        description: descriptionValue,
        id: props.todoData.id,
        completed: status
    }

    props.updating(obj)
  }
  return (
    <tr className='list__row'>
        <td><input type="checkbox" checked={statusChecker} onChange={(el) => updateStatusChecker(el.target.value)} onClick={updateServerStatus}/></td>
        <td><input className='list__input' type="text" value={titleValue} onChange={(el) => updateTitle(el.target.value)} readOnly={readOnly}/></td>
        <td><input className='list__input' type="text" value={descriptionValue} onChange={(el) => updateDescription(el.target.value)} readOnly={readOnly}/></td>
        <td ><p className={statusClass} onClick={updateServerStatus}>{status}</p></td>
        <td className='list__nav'><p onClick={updateItem} className='list__edit'>Edit</p><p className='list__delete' onClick={handleDelete}>Delete</p></td>
    </tr>
  )
}