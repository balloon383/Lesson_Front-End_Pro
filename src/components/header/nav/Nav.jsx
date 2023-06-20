/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from "react";
import shoppingCart from "../../../images/shopping-cart.png";
import { getLoggedUser, logOut } from "../../../api";
import "./style.css";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setUserAction } from "../../../redux/actions/userActions";

export default function Nav() {
  const [LogOutStatus, setLogOutStatus] = useState({
    display: "none",
  });
  const dispatch = useDispatch()
  let [userLink, setUserLink] = useState("/login");
  let userShoppingCart = useSelector(
    (store) => store.user.shoppingCart
  ); 
  let [counter, setCounter] = useState(0)
  let name = useSelector(store => store.user.name)


  const checkLogged = useCallback(() => {
    let loggedUser = getLoggedUser();

    if (loggedUser.status === "true" || loggedUser.status === true) {
      setLogOutStatus({
        display: "block",
      });
      setUserLink("/user");
    } else {
      setLogOutStatus({
        display: "none",
      });
      setUserLink("/login");
    }
  }, []);

  useEffect(() => {
    checkLogged();
  }, [checkLogged, name]);

  useEffect(() => {
    if (userShoppingCart) {
      setCounter(userShoppingCart.length);
    } else {
      setCounter(0);
    }
  }, [userShoppingCart]);

  return (
    <nav>
      <ul className="header__nav--ul">
        <li className="header__nav--li">
          Hi,
          <Link to={userLink} className="header__nav--user">
            <Stack direction="row" spacing={2}>
              <Button size="large">{name || 'Log In'}</Button>
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
              checkLogged();
              dispatch(setUserAction(''));
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
