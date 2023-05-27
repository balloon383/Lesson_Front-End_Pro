import React, { useState, useContext } from "react";
import { getUsers, changeStatus } from "../../../api";
import { Navigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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
    localStorage.setItem("loggedUser", JSON.stringify(user));
    holdCheck()
    setRedirect('true')
  }
  if (redirect === 'true') {
      return <Navigate to='/'/>
    } 
  return (
    <section className="main__login--container">
      <h2 className="main__login--header main__header">Secure Sign In</h2>
      <h3 className="main__login--comment main__comment">
        For current customers
      </h3>
      <p className="main__error" style={passwordError}>
        Invalid password.
      </p>
      <p className="main__error main__error--email" style={loginError}>
        Invalid login.
      </p>
      <form action="GET" className="main__login--form">
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
      </form>

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
    </section>
  );
}
