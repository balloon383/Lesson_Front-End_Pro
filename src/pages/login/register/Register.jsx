import React, { useState } from "react";
import { getUsers, registration } from '../../../api'
import { Navigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../../redux/actions/userActions";

 import { Formik } from 'formik';



export default function Register() {

  const [redirect, setRedirect] = useState('')
  const dipatcher = useDispatch()

    const [loginError, setLoginError] = useState({
        display: 'none'
  })
    const [passwordError, setPasswordError] = useState({
        display: 'none'
    })
    const [userError, setUserError] = useState({
        display: 'none'
    })
    
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



  function validateRegistration(name, email, password, passwordVerify) {
    if (emailRegex.test(email)) {
      setLoginError({
        display: 'none'
  })
    } else {
      setLoginError({
        display: 'block'
  })
      return;
    }

    if (password === passwordVerify && password.length > 4) {
      setPasswordError({
        display: 'none'
  })
    } else {
      setPasswordError({
        display: 'block'
  })
      return;
    }

    registerUser(name, email, password);
  }

  async function registerUser(name, email, password) {
    let usersArr = await getUsers();
    let newUser = {};
    for (let i = 0; i < usersArr.length; i++) {
      if (email === usersArr[i].email) {
        setUserError({
        display: 'block'
    })
        return;
      } else {
        setUserError({
        display: 'none'
    })
        newUser = {
          name: name,
          email: email,
          password: password,
          status: true,
        };
      }
    }

    let registeredUser = await registration(newUser);
    newUser = { ...registeredUser };
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({
        email: newUser.email,
        id: newUser.id,
        name: newUser.name,
        orders: newUser.orders,
        shoppingCart: newUser.shoppingCart,
        status: newUser.status,
      })
    );
    dipatcher(setUserAction(newUser))
    setRedirect('true')
  }

    if (redirect === 'true') {
      return <Navigate to='/'/>
  } 
  

  return (
    <Box className="main__register--container">
      <Typography variant="h4" className="main__register--header main__header">
        Quick Registration
      </Typography>
      <Typography
        variant="h5"
        className="main__register--comment main__comment"
      >
        For new customers
      </Typography>
      <Typography
        variant="inherit"
        className="main__error"
        style={passwordError}
        margin="5px"
      >
        Passwords not matches, or shorter than 5 symbols
      </Typography>
      <Typography
        variant="inherit"
        className="main__error"
        style={loginError}
        margin="5px"
      >
        Invalid login, example: login@email.com
      </Typography>
      <Typography
        variant="inherit"
        className="main__error main__error--exist-register"
        style={userError}
        margin="5px"
      >
        User already exsist
      </Typography>
      <Box>
        <Formik
          initialValues={{ name: "", email: "", password: "", passwordVerify: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (values.password !== values.passwordVerify) {
              errors.password = "Password not matches";
            } else if (values.password.length < 3) {
              errors.password = "Password too short";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              validateRegistration(
                values.name,
                values.email,
                values.password,
                values.passwordVerify
              );
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="login__input"
                placeholder="Name"
              />
              {errors.name && touched.name && errors.name}
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="login__input"
                placeholder="Email Address"
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="login__input"
                placeholder="Password"
              />
              {errors.password && touched.password && errors.password}
              <input
                type="password"
                name="passwordVerify"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordVerify}
                className="login__input"
                placeholder="Password Verify"
              />
              {errors.passwordVerify &&
                touched.passwordVerify &&
                errors.passwordVerify}
              <button
                type="submit"
                disabled={isSubmitting}
                className="login_button"
              >
                Create Account
              </button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
/* Дороби ерорс */