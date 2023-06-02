import React from 'react'
import './style.css'
import LoginInputs from './loginInputs/LoginInputs'
import Register from './register/Register'
import Box from "@mui/material/Box";

export default function Login() {
  return (
    <Box className="Login">
      <Box className="main__login">
        <LoginInputs />
        <Register />
      </Box>
    </Box>
  );
}
