import React, { useEffect } from 'react'
import './style.css'
import { useSelector } from 'react-redux';
import OrderItem from "./orderItem/OrderItem"
export default function Orders() {

  let orders = useSelector(store => store.user.userData.orders)
  
  return (
    <section className="orders__box">
      <table className='table'>
        <tbody className='table__body'>
          <tr className='table__header'>
            <td>Item description</td>
            <td>Price</td>
            <td>Sale</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
          {orders.map(el => <OrderItem item={ el } />) }
        </tbody>
      </table>
    </section>
  );
}
