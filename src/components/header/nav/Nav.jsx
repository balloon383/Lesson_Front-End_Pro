/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import shoppingCart from '../../../images/shopping-cart.png'
import { getLoggedUser, logOut } from '../../../api'
import './style.css'
export default function Nav({changePage}) {

    const [userName, setUserName] = useState('Log In')
    const [LogOutStatus, setLogOutStatus] = useState({
        display: 'none' 
    })

    useEffect(() => {
        checkLogged()
    }, [userName])
    
    function holdCheck() {
        checkLogged()
    }
    function checkLogged() {

        let loggedUser = getLoggedUser()

        if (loggedUser.status === 'true') {
            setLogOutStatus({
                display: 'block' 
            })
            setUserName(loggedUser.name)
        } else {
            setLogOutStatus({
                display: 'none' 
            })
            setUserName('Log In')
        }
    }
    
    function handleChangePage(page) {
        changePage(page)
    }


    return (
    <nav>
        <ul className="header__nav--ul">
                <li className="header__nav--li" >Hi, <a href="" className="header__nav--user"
                    onClick={() => {
                        handleChangePage('user')
                    }}
                >{userName}</a></li>
            <li className="header__nav--li">
                <a href="#">
                        <img className="header__shoppingcart" src={shoppingCart} alt="shopping cart" width="35px" height="35px" onClick={() => {
                            handleChangePage('shoppingCart')
                        }} />
                    <span className="header__shoppingcart--counter">0</span>
                </a>
                <a href="#" className="header__logout" style={LogOutStatus} onClick={() => {
                        logOut()
                        checkLogged()
                        changePage('main')
                }}>Log out</a>
            </li>
        </ul>
    </nav>
    )
}
