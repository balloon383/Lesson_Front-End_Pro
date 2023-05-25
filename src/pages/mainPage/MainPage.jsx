import React, { useState, useEffect } from 'react'
import {getProducts} from '../../api'
import Category from './category/Category'
export function MainPage() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
      async function getShop() {
      const productsArr = await getProducts()
      setProducts(productsArr)
    }
    getShop()
  }, [])

  useEffect(() => {
    sortCategories()
  }, [products])
  

  function sortCategories() {

    let shopCategories = []

    for (let i = 0; i < products.length; i++) {
    shopCategories.push(products[i].category);
    }
    shopCategories = shopCategories.filter((el, i, self) => {
    return i === self.indexOf(el);
    });
    setCategories(shopCategories)
    sortProducts()
  }

  function sortProducts() {
    
  }

  return (
      <section>
      {categories.map(el => <Category productsArr={products.filter(e => e.category === el)} title={ el }  key={ el }/>)}
      </section>
  )
}