import React from 'react'
import { getLoggedUser } from '../../../api'
import CartItem from './cartItems/CartItem'

export default function Cart() {
    let products = getLoggedUser().shoppingCart
    console.log(products)
  return (
    <section>
        <h2>Items in Shopping Cart</h2>
        <table>
            <tbody>
                <tr>
                    <td>Item description</td>
                    <td>Price</td>
                    <td>Sale</td>
                    <td>Quantity</td>
                    <td>Total</td>
                    <td>Action</td>
                </tr>
                {products.map((el) => (
                    <CartItem item={el} key={el.id}/>
                ))}
            </tbody>
        </table>
    </section>
    )
}
