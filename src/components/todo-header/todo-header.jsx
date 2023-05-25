import './style.css';
import React, { useState } from 'react'


export default function TodoHeader(props) {
  const [titleValue, setTitle] = useState('')
  const [descriptionValue, setDescription] = useState('')

  function log(){
    props.setData(titleValue, descriptionValue) 
  }

  return (
    <section className='header__body'>
      <input type="text" placeholder='Todo Title' className='header__input--title header__input' value={titleValue} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" placeholder='Todo description' className='header__input--description header__input' value={descriptionValue} onChange={(e) => setDescription(e.target.value)}/>
      <button className='header__button' onClick={log}>Create Todo</button>  
    </section>
  )

}

