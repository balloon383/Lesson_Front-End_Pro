import React from 'react'
import Cart from './cartList/Cart'
import Summary from './summary/Summary'
import './style.css'
export default function ShoppingCart() {
  return (
    <section className='content__container shopping__cart--container'>
      <Cart/>
      <Summary/>
    </section>
  )
}
