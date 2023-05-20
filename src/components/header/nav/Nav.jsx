/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react'
import shoppingCart from '../../../images/shopping-cart.png'
import { getLoggedUser, logOut } from '../../../api'
import './style.css'
import UserContext from '../../../context/UserContext'


export default function Nav({changeUserName}) {
    const [userName, setUserName] = useState('Log In')
    const [LogOutStatus, setLogOutStatus] = useState({
        display: 'none' 
    })

    let [userLink, setUserLink] = useState('/login')
    
    useEffect(() => {
        checkLogged()

    }, [userName, changeUserName])
    
    function holdCheck() {
        checkLogged()
    }

    function checkLogged() {

        let loggedUser = getLoggedUser()
        
        console.log(loggedUser.status)

        if (loggedUser.status === 'true' || loggedUser.status === true) {
            setLogOutStatus({
                display: 'block' 
            })
            setUserLink('/user')
            setUserName(loggedUser.name)
            console.log(loggedUser)

        } else {
            setLogOutStatus({
                display: 'none' 
            })
            setUserName('Log In')
            setUserLink('/login')

        }

    }


    return (
    <nav>
        <ul className="header__nav--ul">
                <li className="header__nav--li" >Hi, <a href={userLink} className="header__nav--user" >{userName}</a></li>
            <li className="header__nav--li">
                <a href="/shoppingCart">
                        <img className="header__shoppingcart" src={shoppingCart} alt="shopping cart" width="35px" height="35px" />
                    <span className="header__shoppingcart--counter">0</span>
                </a>
                <a href="/main" className="header__logout" style={LogOutStatus} onClick={() => {
                        logOut()
                        holdCheck()
                }}>Log out</a>
            </li>
        </ul>
    </nav>
    )
}
