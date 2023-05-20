import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './pages/login/Login';
import {MainPage} from './pages/mainPage/MainPage'
import User from './pages/user/User'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';


export default function App() {

  const [userName, setUserName] = useState('');

  const checkLogged = (newUser) => {
    setUserName(newUser);
  };

  return (
    <div className="App">
        <Header userName={userName}/>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<Login checkLogged={checkLogged}/>} />
          <Route path="/user" element={<User />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          </Routes>
    </div>
  );
  
}


