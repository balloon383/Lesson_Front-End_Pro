import React from 'react'
import './style.css'
import logo from '../../images/logo.png'
import Nav from './nav/Nav.jsx'
import UserContext from '../../context/UserContext'
export default function Header() {


  return (
    <section className='header'>
      <section className='content__container'>
        <section className='header__flex'>
          <a href="/main"><img src={logo} alt="LOGO" width='35px' /></a>
            <Nav />
        </section>
      </section>
    </section>
    )
}
