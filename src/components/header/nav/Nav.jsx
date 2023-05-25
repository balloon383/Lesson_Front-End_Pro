/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react'
import shoppingCart from '../../../images/shopping-cart.png'
import { getLoggedUser, logOut } from '../../../api'
import './style.css'
import UserContext from '../../../context/UserContext'
import { Link } from 'react-router-dom'


export default function Nav({ changeUserName }) {
    
    const [userName, setUserName] = useState('Log In')
    const [LogOutStatus, setLogOutStatus] = useState({
        display: 'none' 
    })
    let [userLink, setUserLink] = useState('/login')
    let { counter, setCounter, checkLoggedUser } = useContext(UserContext)
    
    
    useEffect(() => {
        checkLogged()
    }, [userName, changeUserName])
    
    function holdCheck() {
        checkLogged()
        checkLoggedUser()
    }

    function checkLogged() {

        let loggedUser = getLoggedUser()
        

        if (loggedUser.status === 'true' || loggedUser.status === true) {
            setLogOutStatus({
                display: 'block' 
            })
            setUserLink('/user')
            setUserName(loggedUser.name)
            setCounter(loggedUser.shoppingCart.length)
        } else {
            setLogOutStatus({
                display: 'none' 
            })
            setUserName('Log In')
            setCounter(0)
            setUserLink('/login')

        }

    }

    return (
    <nav>
        <ul className="header__nav--ul">
                <li className="header__nav--li" >Hi, <Link to={userLink} className="header__nav--user" >{userName}</Link></li>
            <li className="header__nav--li">
                <Link to="/shoppingCart">
                        <img className="header__shoppingcart" src={shoppingCart} alt="shopping cart" width="35px" height="35px" />
                        <span className="header__shoppingcart--counter">{counter}</span>
                </Link>
                <Link to="/" className="header__logout" style={LogOutStatus} onClick={() => {
                        logOut()
                        holdCheck()
                }}>Log out</Link>
            </li>
        </ul>
    </nav>
    )
}
