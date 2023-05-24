import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import shoppingCart from '../../../../images/shopping-cart.png'
import { getLoggedUser, changeStatus, getUsers } from "../../../../api";
import UserContext from "../../../../context/UserContext";
import images from "../../../../images";

export default function Card({ product }) {
  const [buttonStatus, setButtonStatus] = useState({
    background: 'red'
  })
  useEffect(() => {
    checkButtonStatus()
  }, [])
  
  let { counter, setCounter } = useContext(UserContext)
  
  function checkButtonStatus() {
    let shoppingCart = getLoggedUser().shoppingCart || []
    if (shoppingCart.length > 0) {
      setCounter(shoppingCart.length)
      for (let i = 0; i < shoppingCart.length; i++){
        if (shoppingCart[i].id === product.id) {
          setButtonStatus({
          background: 'rgb(0, 178, 0)'/* green */
          })
        }
      }
    }
  }

  function toCart() {
    let user = getLoggedUser()
    if (user.length === 0) {
      console.log(`user not logged`)
    } else {
      if (buttonStatus.background === 'red') {
        setButtonStatus({
          background: 'rgb(0, 178, 0)'/* green */
        })
        addToCart()
      } else {
        setButtonStatus({
          background: 'red'
        })
        removeFromCart()

      }
      
    }
  }

  async function addToCart() {
    let localUser = getLoggedUser()
    let dataToUpdate = {
    ...localUser,
    shoppingCart: [{...product, quantity: 1}, ...localUser.shoppingCart]
    }; 
    const userUpdated = await changeStatus(dataToUpdate)
    localStorage.setItem('loggedUser', JSON.stringify(userUpdated))
    setCounter(counter + 1)
  }
  async function removeFromCart() {
    let localUser = getLoggedUser()
    let store = await getUsers(localUser.id);
    let updatedStore = store.shoppingCart.filter((el) => el.id !== product.id);
    store.shoppingCart = updatedStore;
    await changeStatus(store)
    localStorage.setItem('loggedUser', JSON.stringify(store))
    setCounter(counter - 1)
  }
    
    return (
    <section className="card">
      <img src={images[product.img]} className="card__img" alt="card Img" width='150px' />
      <h3 className="card__header">{product.title}</h3>
      <ul className="card__ul">
        <li className="card__li">
            {
                product.sale ? 
                <ul>
                    <li className="card__li--price-prev">${product.price}</li>
                    <li className="card__li--salePercent"> -{product.salePercent}%</li>
                    <li className="card__li--price">${product.price - (product.price * product.salePercent) / 100}</li>
                </ul>
                :
                <span className="card__li--price">${product.price}</span>
            }
        </li>
        <li className="card__li card__li--button" onClick={toCart} style={buttonStatus}>
          <img
            className="card__li--img"
            src={shoppingCart}
            alt="shopping cart"
            width="25px"
            height="25px"
          />
        </li>
      </ul>
    </section>
  );
}
