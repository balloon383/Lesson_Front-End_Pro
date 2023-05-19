import React from 'react'
import './style.css'
import logo from '../../images/logo.png'
import Nav from './nav/Nav.jsx'
export default function Header({changePage}) {

  function toMainPage() {
    changePage('main')
  }

  return (
    <section className='header'>
      <section className='content__container'>
        <section className='header__flex'>
          <a href="#main-page"><img src={logo} alt="LOGO" width='35px' onClick={toMainPage}/></a>
          <Nav changePage={ changePage } />
        </section>
      </section>
    </section>
    )
}
