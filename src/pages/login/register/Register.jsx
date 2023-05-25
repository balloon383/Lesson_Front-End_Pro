import React, { useState, useContext } from "react";
import { getUsers } from '../../../api'
import { Navigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";

export default function Register() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [redirect, setRedirect] = useState('')

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


    let registration = await fetch(
      "https://634e9f834af5fdff3a625f84.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }
    ).then((res) => res.json());
    await registration
    newUser = { ...registration };
    localStorage.setItem("loggedUser", JSON.stringify(newUser));
    holdCheck()
    setRedirect('true')
  }

    if (redirect === 'true') {
      return <Navigate to='/'/>
  } 
  

  return (
    <section className="main__register--container">
      <h2 className="main__register--header main__header">
        Quick Registration
      </h2>
      <h3 className="main__register--comment main__comment">
        For new customers
      </h3>
      <p className="main__error" style={passwordError}>
        Passwords not matches, or shorter than 5 symbols
      </p>
      <p className="main__error" style={loginError}>
        Invalid login, example: login@email.com
      </p>
      <p className="main__error main__error--exist-register" style={userError}>
        User already exsist
      </p>
      <form className="main__register--form" action="PUT">
        <input
          className="main__input main__register--name"
          type="text"
          name="Full name"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="main__input main__register--email"
          type="email"
          name="email"
          placeholder="Email Address"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          className="main__input main__register--password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="main__input main__register--password-verify"
          type="password"
          name="password"
          placeholder="Verify Password"
          value={passwordVerify}
          onChange={(e) => setPasswordVerify(e.target.value)}
        />
      </form>
      <button
        className="main__button main__register--button"
        onClick={() =>
        {
          setRegisterInfo()
        }}
      >
        Create Account
      </button>
    </section>
  );
}
