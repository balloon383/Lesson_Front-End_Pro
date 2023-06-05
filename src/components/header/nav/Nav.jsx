/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext, useCallback } from "react";
import shoppingCart from "../../../images/shopping-cart.png";
import { getLoggedUser, logOut } from "../../../api";
import "./style.css";
import UserContext from "../../../context/UserContext";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setCounterAction } from "../../../redux/actions/userActions";

export default function Nav({ changeUserName }) {
  const [userName, setUserName] = useState("Log In");
  const [LogOutStatus, setLogOutStatus] = useState({
    display: "none",
  });
  const dispatch = useDispatch()
  let [userLink, setUserLink] = useState("/login");
  let { checkLoggedUser } = useContext(UserContext);
  let counter = useSelector(store => store.user.counter)
  let name = useSelector(store => store.user.userData.name)
  function holdCheck() {
    checkLogged();
    checkLoggedUser();
  }

  const checkLogged = useCallback(() => {
    let loggedUser = getLoggedUser();

    if (loggedUser.status === "true" || loggedUser.status === true) {
      setLogOutStatus({
        display: "block",
      });
      setUserLink("/user");
      setUserName(loggedUser.name);
    } else {
      setLogOutStatus({
        display: "none",
      });
      setUserName("Log In");
      dispatch(setCounterAction(0));
      setUserLink("/login");
    }
  }, [dispatch]);

  useEffect(() => {
    checkLogged();
  }, [checkLogged, userName, changeUserName]);

  return (
    <nav>
      <ul className="header__nav--ul">
        <li className="header__nav--li">
          Hi,{" "}
          <Link to={userLink} className="header__nav--user">
            <Stack direction="row" spacing={2}>
              <Button size="large">{name}</Button>
            </Stack>
          </Link>
        </li>
        <li className="header__nav--li">
          <Link to="/shoppingCart">
            <img
              className="header__shoppingcart"
              src={shoppingCart}
              alt="shopping cart"
              width="35px"
              height="35px"
            />
            <span className="header__shoppingcart--counter">{counter}</span>
          </Link>
          <Link
            to="/"
            className="header__logout"
            style={LogOutStatus}
            onClick={() => {
              logOut();
              holdCheck();
            }}
          >
            <Stack spacing={2} direction="row">
              <Button size="large" color="success">
                Log out
              </Button>
            </Stack>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
