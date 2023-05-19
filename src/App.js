import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './pages/login/Login';
import Main from './pages/mainPage/MainPage'
import User from './pages/user/User'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
export default function App() {

  const [state, setState] = useState('login')

  function changePage(pageName = 'login') {

    if (pageName === 'login') {
      setState('login')
    } else if (pageName === 'main') {
      setState("main");
    } else if (pageName === 'user') {
      setState('user')
    } else if (pageName === 'shoppingCart') {
      setState("shoppingCart");
    }

    console.log(state)

  }

  return (
    <div className="App">
      {state === "login" ? <Login /> : state === "main" ? <Main/> : state === 'user' ? <User/> : <ShoppingCart/>}
    </div>
  );
  
}


