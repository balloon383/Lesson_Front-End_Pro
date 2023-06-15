import React, { useState } from 'react'
import images from '../../../../images'
import { changeStatus, getLoggedUser } from '../../../../api'
import { useDispatch } from 'react-redux'
import { decrementCounterAction, setUserAction } from '../../../../redux/actions/userActions'

export default function CartItem({item}) {
  const [itemCounter, setItemCounter] = useState(item.quantity)
  const [totalPrice, setTotalPrice] = useState(
    item.sale ? 
    (item.price * item.quantity) - ((item.price * item.quantity) * item.salePercent / 100)  
    : 
    item.price * item.quantity
    )
  
  const dispatch = useDispatch()

  function setQuantity(e){
    let quantity = e.target.value
    if (quantity <= 0){
      quantity = 1
    } 
    setItemCounter(quantity)
    setTotalPrice(
      item.sale ? 
      (item.price * quantity) - ((item.price * quantity) * item.salePercent / 100)  
      : 
      item.price * quantity
      )
    let updatingItem = getLoggedUser()
    let newShoppingCart = updatingItem.shoppingCart.map((el) => {
      if (el.id === item.id){
        el.quantity = quantity
        return el
      } else {
        return el
      }
    })
    updatingItem.shoppingCart = newShoppingCart
    localStorage.setItem('loggedUser', JSON.stringify(updatingItem))
    dispatch(setUserAction(updatingItem))
  }

  function deleteItem(){
    let user = getLoggedUser()
    let newShoppingCart = user.shoppingCart.filter(el => el.id !== item.id)
    user.shoppingCart = newShoppingCart
    localStorage.setItem('loggedUser', JSON.stringify(user))
    changeStatus(user)
    dispatch(decrementCounterAction())
    dispatch(setUserAction(user))
  }
  
  return (
    <tr>
        <td><img src={images[item.img]} alt="item img" width="150px" height="150px"/>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.sale ? -item.salePercent + "%" : "-"}</td>
        <td><input type="text" value={itemCounter} onChange={(e) => setQuantity(e)} /></td>
        <td>${totalPrice}</td>
        <td><img src={images['deleteButton']} alt="delete" width='35px' onClick={deleteItem}/></td>
    </tr>
  )
}
