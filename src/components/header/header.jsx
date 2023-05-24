import React from 'react'
import './style.css'
import logo from '../../images/logo.png'
import Nav from './nav/Nav.jsx'
import UserContext from '../../context/UserContext'
import { Link } from 'react-router-dom'
export default function Header(props) {

  
  return (
    <section className='header'>
      <section className='content__container'>
        <section className='header__flex'>
          <Link to="/"><img src={logo} alt="LOGO" width='35px' /></Link>
            <Nav changeUserName={props}/>
        </section>
      </section>
    </section>
    )
}
