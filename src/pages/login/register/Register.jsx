import React from 'react'

export default function Register() {
  return (
    <section className="main__register--container">
                <h2 className="main__register--header main__header">
                    Quick Registration
                </h2>
                <h3 className="main__register--comment main__comment">
                    For new customers
                </h3>
                <p className="main__error main__error--password-register">Passwords not matches, or shorter than 5 symbols</p>
                <p className="main__error main__error--email-register">Invalid login, example: login@email.com</p>
                <p className="main__error main__error--exist-register">User already exsist</p>
                <form className="main__register--form" action="PUT">
                    <input className="main__input main__register--name" type="text" name="Full name" placeholder="Full name"/>
                    <input className="main__input main__register--email" type="email" name="email" placeholder="Email Address"/>
                    <input className="main__input main__register--password" type="password" name="password" placeholder="Password"/>
                    <input className="main__input main__register--password-verify" type="password" name="password" placeholder="Verify Password"/>
                </form>
                <button className="main__button main__register--button">Create Account</button>
            </section>
    )
}
