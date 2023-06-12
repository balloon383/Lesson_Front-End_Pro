import React, { useEffect, useState } from 'react'
import images from '../../../../images'
import { getLoggedUser } from '../../../../api'

export default function CartItem({item}) {
  const [itemCounter, setItemCounter] = useState(item.quantity)
  const [totalPrice, setTotalPrice] = useState(
    item.sale ? 
    (item.price * item.quantity) - ((item.price * item.quantity) * item.salePercent / 100)  
    : 
    item.price * item.quantity
    )

  function setQuantity(e){
    setItemCounter(e.target.value)
    setTotalPrice(item.price * e.target.value)
    // fix previous line
    let updatingItem = getLoggedUser()
    let newShoppingCart = updatingItem.shoppingCart.map((el) => {
      if (el.id === item.id){
        el.quantity = e.target.value
        return el
      } else {
        return el
      }
    })
    updatingItem.shoppingCart = newShoppingCart
    localStorage.setItem('loggedUser', JSON.stringify(updatingItem))
  }
  
  return (
    <tr>
        <td><img src={images[item.img]} alt="item img" width="150px" height="150px"/>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.sale ? -item.salePercent + "%" : "-"}</td>
        <td><input type="text" value={itemCounter} onChange={(e) => setQuantity(e)} /></td>
        <td>{totalPrice}</td>
        <td>{'del'}</td>
    </tr>
  )
}
