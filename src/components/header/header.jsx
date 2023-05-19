import React from 'react'
import './style.css'
import logo from '../../images/logo.png'
import Nav from './nav/Nav.jsx'
import { getLoggedUser } from '../../api'
export default function Header({changePage}) {

  function handleChangePage(page) {
    
    let loggedUser = getLoggedUser()
      if (loggedUser.status === 'true') {
          changePage(page)
      } else {
          changePage('login')
    }
    
  }

  return (
    <section className='header'>
      <section className='content__container'>
        <section className='header__flex'>
          <a href="#main-page"><img src={logo} alt="LOGO" width='35px' onClick={() => { handleChangePage('main') }}/></a>
          <Nav changePage={ handleChangePage } />
        </section>
      </section>
    </section>
    )
}
