import React from "react";
import './style.css'

export default function Tools() {


  return (
    <ul className="tools__container">
      <li><button className="tools__button tools__button-all">All</button></li>
      <li><button className="tools__button tools__button-pending">Pending</button></li>
      <li><button className="tools__button tools__button-completed">Completed</button></li>
    </ul>
  )
}
