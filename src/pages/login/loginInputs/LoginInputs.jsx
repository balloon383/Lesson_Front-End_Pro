import React from 'react'

export default function LoginInputs() {
return (
        <section className="main__login--container">
            <h2 className="main__login--header main__header">
                Secure Sign In
            </h2>
            <h3 className="main__login--comment main__comment">
                For current customers
            </h3>
            <p className="main__error main__error--password">Invalid password.</p>
            <p className="main__error main__error--email">Invalid login.</p>
            <form action="GET" className="main__login--form">
                <input className="main__input main__login--email" type="email" name="email" placeholder="Email Address"/>
                <input className="main__input main__login--password" type="password" name="password" placeholder="Password"/>
            </form>
            <button className="main__button main__login--button">Sign in</button>
        </section>
    )
}
