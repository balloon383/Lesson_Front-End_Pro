import React from 'react'
import './style.css'
import Header from '../../components/header/Header.jsx'
import LoginInputs from './loginInputs/LoginInputs'
import Register from './register/Register'
export default function Login() {

  return (
    <section className='Login'>
      <Header/>
      <section className='main__login'>
      <LoginInputs/>
      <Register/>
      </section>
    </section>
    )
}
