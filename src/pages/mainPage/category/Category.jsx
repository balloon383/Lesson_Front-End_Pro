import React, { useState, useEffect } from 'react'
import './style.css'
import Card from './card/Card'
export default function Category({productsArr, title}) {
    
  console.log(title)
  
    return (
      <section className='content__container'>
        <h2>{title}</h2>
        <section className='card__box'>
          {productsArr.map(el => <Card product={ el } />)}
        </section>
      </section>
      )
}
