import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { changeStatus, getLoggedUser } from '../../../api'
import { setCounterAction, setUserAction } from '../../../redux/actions/userActions'
export default function Summary() {
  
  let cart = useSelector(store => store.user.userData.shoppingCart)
  let products = useSelector(store => store.products)
  let [summary, setSummary] = useState(0) 
  const dispatch = useDispatch()

  function completeOrder() {
    let clearCart = []
    let user = getLoggedUser()
    let newOrders = [...user.orders, ...user.shoppingCart];
    user.orders = newOrders
    user.shoppingCart = clearCart
    localStorage.setItem('loggedUser', JSON.stringify(user))
    changeStatus(user)
    dispatch(setUserAction(user))
    dispatch(setCounterAction(0));
  }

  useEffect(() => {
    let shoppingCart = []
    if(cart.length > 0 && products.length > 0){
      for(let i = 0; i < cart.length; i++){
        let item = products.find(el => el.id === cart[i].id)
        item = {...item, count: cart[i].count}
        shoppingCart.push(item)
      }
    }

    let total = 0

    for (let i = 0; i < shoppingCart.length; i++){
      
      if(shoppingCart[i].sale){
        total =
          total +
          shoppingCart[i].price * shoppingCart[i].count -
          (shoppingCart[i].price *
            shoppingCart[i].count *
            shoppingCart[i].salePercent) /
            100;
      } else {
        total = total + shoppingCart[i].price * shoppingCart[i].count;
      }
      
    }
    setSummary(total)
  }, [cart])
  
  
  return (
    <div className="summary__box">
      <h2 className="summary__header">My Order Summary</h2>
      <ul>
        <li className="summary__text">Order Total</li>
        <li className="summary__total">${summary}</li>
      </ul>
      <button className="summary__button" onClick={completeOrder}>
        Complete Order
      </button>
    </div>
  );
}
