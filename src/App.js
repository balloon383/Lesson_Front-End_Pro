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
    setState(pageName)
  }

  function setPage(state) {
    console.log(state)

    if (state === "login") {
      return <Login />;
    } else if (state === "main") {
      return <Main />;
    } else if (state === "user") {
      return <User />;
    } else if (state === "shoppingCart") {
      return <ShoppingCart />;
    }
  }

  return (
    <div className="App">
      <Header changePage={changePage} />
      {setPage(state)}
    </div>
  );
  
}


