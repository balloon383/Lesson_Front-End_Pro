import React, { useState } from "react";
import { getUsers, changeStatus } from "../../../api";
import { Navigate } from "react-router-dom";


export default function LoginInputs({checkLogged}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState({
    display: "none",
  });
  const [passwordError, setPasswordError] = useState({
    display: "none",
  });
  const [redirect, setRedirect] = useState('')

  function holdCheck(userName){
    checkLogged(userName)
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
    holdCheck(user.name)
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
      <p className="main__error" style={passwordError}>Invalid password.</p>
      <p className="main__error main__error--email"style={loginError}>Invalid login.</p>
      <form action="GET" className="main__login--form">
        <input
          className="main__input main__login--email"
          type="email"
          name="email"
          placeholder="Email Address"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          className="main__input main__login--password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button
        className="main__button main__login--button"
        onClick={() => {
          setLoginInfo()
          checkLogged()
        }}
      >
      Sign in
      </button>
    </section>
  );
}
