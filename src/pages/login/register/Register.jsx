import React, { useState, useContext } from "react";
import { getUsers, registration } from '../../../api'
import { Navigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../../redux/actions/userActions";

export default function Register() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
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
  const {checkLoggedUser} = useContext(UserContext)

  function holdCheck() {
    checkLoggedUser()

  }

  function setRegisterInfo() {
    const userName = name;
    const userLogin = login;
    const userPassword = password;
    const userPasswordVerify = passwordVerify;
    validateRegistration(userName, userLogin, userPassword, userPasswordVerify);
  }

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
    holdCheck()
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
      <Typography variant="inherit" className="main__error" style={loginError} margin='5px'>
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
      <Box className="main__register--form">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "530px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Full name"
            variant="outlined"
            type="text"
            name="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            type="email"
            name="email register"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Verify Password"
            value={passwordVerify}
            onChange={(e) => setPasswordVerify(e.target.value)}
          />
        </Box>
      </Box>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setRegisterInfo();
          }}
        >
          Create Account
        </Button>
      </Stack>
    </Box>
  );
}
