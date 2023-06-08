import React, { useState } from "react";
import { getUsers, changeStatus } from "../../../api";
import { Navigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../../redux/actions/userActions";

 import { Formik } from "formik";



export default function LoginInputs() {
  /* const [login, setLogin] = useState("");
  const [password, setPassword] = useState(""); */
  const [loginError, setLoginError] = useState({
    display: "none",
  });
  const [passwordError, setPasswordError] = useState({
    display: "none",
  });
  const [redirect, setRedirect] = useState('')
  const dispatch = useDispatch()

  function setLoginInfo(login, password) {
    const userLogin = login;
    const userPassword = password;
    checkUser(userLogin, userPassword);
  }

  async function checkUser(email, password) {
    let usersArr = await getUsers();
    const userCheck = usersArr.find((el) => el.email === email);
    if (!userCheck) {
          setLoginError({
            display: 'block'
            
        })
          setPasswordError({
        display: 'none'
        })
      return;
      }
      
    if (userCheck.password !== password) {
          setLoginError({
        display: 'none'
        })
          setPasswordError({
        display: 'block'
        })
      return;
    }
      setLoginError({
        display: 'none'
      })
      setPasswordError({
        display: 'none'
        })
    const user = await changeStatus(userCheck, "true");
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({
        email: user.email,
        id: user.id,
        name: user.name,
        orders: user.orders,
        shoppingCart: user.shoppingCart,
        status: user.status,
      })
    );
    dispatch(setUserAction(user));
    setRedirect('true')
  }

  if (redirect === 'true') {
      return <Navigate to='/'/>
  } 
  

  return (
    <Box className="main__login--container">
      <Typography variant="h4" className="main__login--header main__header">
        Secure Sign In
      </Typography>
      <Typography variant="h5" className="main__login--comment main__comment">
        For current customers
      </Typography>
      <Typography
        variant="inherit"
        className="main__error"
        style={passwordError}
        margin="5px"
      >
        Invalid password.
      </Typography>
      <Typography
        variant="inherit"
        className="main__error main__error--email"
        style={loginError}
        margin="5px"
      >
        Invalid login.
      </Typography>
      <Box>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setLoginInfo(values.email, values.password);
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
              <button
                type="submit"
                disabled={isSubmitting}
                className="login_button"
              >
                Log In
              </button>
            </form>
          )}
        </Formik>
      </Box>
      
    </Box>
  );
}
