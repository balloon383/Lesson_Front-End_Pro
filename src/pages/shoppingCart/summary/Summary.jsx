import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Summary() {
  
  let shoppingCart = useSelector(store => store.user.userData.shoppingCart)
  let [summary, setSummary] = useState(0) 
  useEffect(() => {
    let total = 0
    for (let i = 0; i < shoppingCart.length; i++){
      
      if(shoppingCart[i].sale){
        total = total + (shoppingCart[i].price * shoppingCart[i].quantity) - ((shoppingCart[i].price * shoppingCart[i].quantity) * shoppingCart[i].salePercent / 100)
      } else {
        total = total + (shoppingCart[i].price * shoppingCart[i].quantity)
      }
      
    }
    setSummary(total)
  }, [shoppingCart])
  
  
  return (
    <div className='summary__box'>
      <h2 className='summary__header'>My Order Summary</h2>
      <ul>
        <li className='summary__text'>order Total</li>
        <li className='summary__total'>${summary}</li>
      </ul>
      <button className='summary__button'>Complete Order</button>
    </div>
  )
}
