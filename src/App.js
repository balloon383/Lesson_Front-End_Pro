import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './pages/login/Login';
import {MainPage} from './pages/mainPage/MainPage'
import User from './pages/user/User'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Header from './components/header/Index';
import { Route, Routes } from 'react-router-dom';
import UserContext from './context/UserContext';
import PrivateRoute from './components/hoc/PrivateRoute';
import { getLoggedUser } from './api';

export default function App() {

  const [userName, setUserName] = useState('');
  const [counter, setCounter] = useState(0);
  const [isAuth, setIsAuth] = useState('')

  const checkLoggedUser = () => {
    let localUser = getLoggedUser();
    if (localUser.status === "true" || localUser.status === true) {
      setIsAuth(true);
    } else if (localUser.status === undefined) {
      setIsAuth(false);
    }
    setUserName(localUser.name);

  };

  useEffect(() => {
    checkLoggedUser();
  }, [isAuth]);
  


  return (
    <div className="App">
      <UserContext.Provider value={{ counter, setCounter, checkLoggedUser }}>
        <Header userName={userName} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/user"
            element={
              <PrivateRoute isAuth={isAuth}>
                <User />
              </PrivateRoute>
            }
          />
          <Route
            path="/shoppingCart"
            element={
              <PrivateRoute isAuth={isAuth}>
                <ShoppingCart />
              </PrivateRoute>
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
  
}


/* дороби ХОК на зміну тру фолс від логіну */