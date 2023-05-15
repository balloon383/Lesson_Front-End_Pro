import React, { useState } from 'react'
import './style.css'

export default function NewTodo(props) {
  const [titleValue, updateTitle] = useState(props.todoData.title)
  const [descriptionValue, updateDescription] = useState(props.todoData.description)
  const [status, updateStatus] = useState('Pending')
  const [statusClass, updateStatusClass] = useState('list__status--red')
  const [readOnly, updateReadOnly] = useState(true)
  const [statusChecker, updateStatusChecker] = useState(false)

  function changeStatus(){
    if(status === 'Pending'){
      updateStatus('Completed')
      updateStatusClass('list__status--green')
      updateStatusChecker(true)
    } else{
      updateStatus('Pending')
      updateStatusClass('list__status--red')
      updateStatusChecker(false)
    }
  }

  function handleDelete(){
    props.deletion(props.id)
  }
  function updateItem(){
    if(readOnly === true){
      updateReadOnly(false)
    } else{
      updateReadOnly(true)
    }
  }

  return (
    <tr className='list__row'>
        <td><input type="checkbox" checked={statusChecker} onChange={(el) => updateStatusChecker(el.target.value)} onClick={changeStatus}/></td>
        <td><input className='list__input' type="text" value={titleValue} onChange={(el) => updateTitle(el.target.value)} readOnly={readOnly}/></td>
        <td><input className='list__input' type="text" value={descriptionValue} onChange={(el) => updateDescription(el.target.value)} readOnly={readOnly}/></td>
        <td onClick={changeStatus} ><p className={statusClass}>{status}</p></td>
        <td className='list__nav'><p onClick={updateItem} className='list__edit'>Edit</p><p className='list__delete' onClick={handleDelete}>Delete</p></td>
    </tr>
  )
}
