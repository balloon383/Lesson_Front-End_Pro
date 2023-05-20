import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './pages/login/Login';
import {MainPage} from './pages/mainPage/MainPage'
import User from './pages/user/User'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import { Context } from 'react';
import UserContext from './context/UserContext';
export default function App() {


  return (
    <div className="App">
      <UserContext.Provider>
        <Header />
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          </Routes>
      </UserContext.Provider>
    </div>
  );
  
}


