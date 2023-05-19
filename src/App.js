import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './pages/login/Login';
import Main from './pages/mainPage/MainPage'
import User from './pages/user/User'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Header from './components/header/Header';
export default function App() {

  const [state, setState] = useState('main')

  function changePage(pageName) {
    
    console.log(pageName);

    setState(pageName)

    console.log(state)

  }

  return (
    <div className="App">
      <Header changePage={ changePage } />
      {state === "login" ? <Login /> : state === "main" ? <Main/> : state === 'user' ? <User/> : <ShoppingCart/>}
    </div>
  );
  
}


