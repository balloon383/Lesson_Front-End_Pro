import React from 'react'
import { getLoggedUser } from '../../../api'
import CartItem from './cartItems/CartItem'
import { useSelector } from 'react-redux';

export default function Cart() {
    
    let products = useSelector(store => store.user.userData.shoppingCart)
    
  return (
    <section className="cart__box">
      <h2>Items in Shopping Cart</h2>
      <table className="cart__table">
        <tbody className="table__body">
          <tr className="table__header">
            <td>Item description</td>
            <td>Price</td>
            <td>Sale</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Action</td>
          </tr>
          {products.map((el) => (
            <CartItem item={el} key={el.id} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
