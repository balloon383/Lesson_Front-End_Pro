import React from 'react'
import './style.css'
import Card from './card/Card'
export default function Category({productsArr, title}) {
    
  
    return (
      <section className='content__container'>
        <h2>{title}</h2>
        <section className='card__box'>
          {productsArr.map(el => <Card product={ el } key={el.id} />)}
        </section>
      </section>
      )
}
