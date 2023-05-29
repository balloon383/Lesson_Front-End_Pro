import React, { useEffect, useState, useContext, useCallback } from "react";
import "./style.css";
import { getLoggedUser, changeStatus, getUsers } from "../../../../api";
import UserContext from "../../../../context/UserContext";
import images from "../../../../images";
import { Navigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
//
import Box from "@mui/material/Box";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";
import { positions } from "@mui/system";

export default function Card({ product }) {
  const [cartStyle, setCartStyle] = useState('primary')
  const [buttonStatus, setButtonStatus] = useState({
    background: "red",
  });
  const [redirect, setRedirect] = useState("");

  let { counter, setCounter } = useContext(UserContext);

  const checkButtonStatus = useCallback(() => {
    let shoppingCart = getLoggedUser().shoppingCart || [];
    if (shoppingCart.length > 0) {
      setCounter(shoppingCart.length);
      for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id === product.id) {
          setButtonStatus({
            background: "rgb(0, 178, 0)" /* green */,
          });
          setCartStyle("secondary");
        }
      }
    }
  }, [product.id, setCounter]);

  useEffect(() => {
      checkButtonStatus();
  }, [checkButtonStatus]);
  
  function toCart() {
    let user = getLoggedUser();
    if (user.length === 0) {
      setRedirect("false");
    } else {
      if (buttonStatus.background === "red") {
        setButtonStatus({
          background: "rgb(0, 178, 0)" /* green */,
        });
        setCartStyle("secondary");
        addToCart();
      } else {
        setButtonStatus({
          background: "red",
        });
        setCartStyle("primary");
        removeFromCart();
      }
      setRedirect("true");
    }
  }

  async function addToCart() {
    let localUser = getLoggedUser();
    let dataToUpdate = {
      ...localUser,
      shoppingCart: [{ ...product, quantity: 1 }, ...localUser.shoppingCart],
    };
    const userUpdated = await changeStatus(dataToUpdate);
    localStorage.setItem("loggedUser", JSON.stringify(userUpdated));
    setCounter(counter + 1);
  }
  
  async function removeFromCart() {
    let localUser = getLoggedUser();
    let store = await getUsers(localUser.id);
    let updatedStore = store.shoppingCart.filter((el) => el.id !== product.id);
    store.shoppingCart = updatedStore;
    await changeStatus(store);
    localStorage.setItem("loggedUser", JSON.stringify(store));
    setCounter(counter - 1);
  }

  if (redirect === "false") {
    return <Navigate to="/login" />;
  }

  return (
    <Box className="card">
      <img
        src={images[product.img]}
        className="card__img"
        alt="card Img"
        width="150px"
      />
      <Typography variant="h5" className="card__header">
        {product.title}
      </Typography>
      <List className="card__ul">
        <ListItem className="card__li">
          {product.sale ? (
            <List>
              <ListItem className="card__li--price-prev" disablePadding>
                ${product.price}
              </ListItem>
              <ListItem disablePadding>
                <Typography
                  variant="inherit"
                  className="card__li--salePercent"

                >
                  {" "}
                  -{product.salePercent}%
                </Typography>
              </ListItem>
              <ListItem className="card__li--price">
                ${product.price - (product.price * product.salePercent) / 100}
              </ListItem>
            </List>
          ) : (
            <Typography variant="inherit" className="card__li--price">
              ${product.price}
            </Typography>
          )}
        </ListItem>
        <ListItem className="card__li card__li--button">
          <IconButton
            color={cartStyle}
            aria-label="add to shopping cart"
            onClick={toCart}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
}
