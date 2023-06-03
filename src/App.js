import React, { useState, useEffect, useCallback } from 'react'
import './App.css';
import Login from './pages/login/Login';
import { MainPage } from './pages/mainPage/MainPage'
import User from './pages/user/User'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Header from './components/header/Index';
import { Route, Routes } from 'react-router-dom';
import UserContext from './context/UserContext';
import PrivateRoute from './components/hoc/PrivateRoute';
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from 'react-redux';
import { getUserThunk } from './redux/actions/userActions';

export default function App() {

  const [userName, setUserName] = useState('');
  const [counter, setCounter] = useState(0);
  const [isAuth, setIsAuth] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)

  const checkLoggedUser = useCallback(() => {
    console.log(user);
    let localUser = user;
    if (user.status === "true" || user.status === true) {
      setIsAuth(true);
    } else if (user.status === undefined) {
      setIsAuth(false);
    }
    setUserName(localUser.name);
    dispatch(getUserThunk(localUser.id));
    // если убрать след. строку - вылазит ошибка, нужно добавить user в масив зависимостей, а если это сделать - выходит бесконечный цикл, и так в нескольких местах в програме
    //eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    checkLoggedUser();
  }, [isAuth, checkLoggedUser]);
  


  return (
      <Box className="App">
        <UserContext.Provider value={{ counter, setCounter, checkLoggedUser }}>
          <Header userName={userName} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
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
      </Box>
  );
  
}