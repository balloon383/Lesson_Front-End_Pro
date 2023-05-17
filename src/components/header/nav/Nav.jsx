import React from 'react'
import shoppingCart from '../../../images/shopping-cart.png'
import './style.css'
export default function Nav() {
return (
    <nav>
        <ul className="header__nav--ul">
            <li className="header__nav--li">Hi, <a href="" className="header__nav--user">Log in</a></li>
            <li className="header__nav--li">
                <a href="#">
                    <img className="header__shoppingcart" src={shoppingCart} alt="shopping cart" width="35px" height="35px" />
                    <span className="header__shoppingcart--counter">0</span>
                </a>
                <a href="#" className="header__logout">Log out</a>
            </li>
        </ul>
    </nav>
    )
}
