import React, { useState, useContext } from "react";
import { getUsers, changeStatus } from "../../../api";
import { Navigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../../redux/actions/userActions";

export default function LoginInputs() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState({
    display: "none",
  });
  const [passwordError, setPasswordError] = useState({
    display: "none",
  });
  const [redirect, setRedirect] = useState('')
  const {checkLoggedUser} = useContext(UserContext)
  const dispatch = useDispatch()

  function holdCheck(){
    checkLoggedUser()
  }

  function setLoginInfo() {
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
    holdCheck()
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
      <Box action="GET" className="main__login--form">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "530px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            type="email"
            name="email"
            placeholder="Email Address"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
      </Box>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setLoginInfo();
            holdCheck();
          }}
        >
          Log In
        </Button>
      </Stack>
    </Box>
  );
}
