import React from "react";
import './style.css'

export default function Tools(props) {


  return (
    <ul className="tools__container">
      <li><button onClick={props.sortAll} className="tools__button tools__button--all">All</button></li>
      <li><button onClick={props.sortByPending} className="tools__button tools__button--pending">Pending</button></li>
      <li><button onClick={props.sortByCompleted} className="tools__button tools__button--completed">Completed</button></li>
    </ul>
  )
}
