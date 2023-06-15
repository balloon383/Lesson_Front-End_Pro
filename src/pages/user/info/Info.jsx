import React from 'react'
import "./style.css";
import { useSelector } from 'react-redux';
import { getLoggedUser } from '../../../api';

export default function Info() {

    const user = getLoggedUser()
    
  return (
    <section className="info__box">
      <h2 className="info__header">My Info</h2>
      <ul className="info__name--box">
        <li>Name:</li>
        <li>{user.name}</li>
      </ul>
      <ul className="info__email--box">
        <li>Email:</li>
        <li>{user.email}</li>
      </ul>
      <button className="info__button">Delete Account</button>
    </section>
  );
}
