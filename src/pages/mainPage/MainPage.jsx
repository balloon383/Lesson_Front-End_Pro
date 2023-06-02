import React, { useState, useEffect, useCallback } from 'react'
import Category from './category/Category'
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from '../../redux/actions/productActions';

export function MainPage() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()
  const store = useSelector(store => store)

  
  useEffect(() => {
    dispatch(getProductsThunk());
    setProducts(store.products);
    // eslint-disable-next-line
  }, []);

  const sortCategories = useCallback(() => {
    let shopCategories = [];

    for (let i = 0; i < products.length; i++) {
      shopCategories.push(products[i].category);
    }
    shopCategories = shopCategories.filter((el, i, self) => {
      return i === self.indexOf(el);
    });
    setCategories(shopCategories);
  }, [products]);
  
  useEffect(() => {
    sortCategories();
  }, [products, sortCategories]);
  

  return (
    <Box>
      {categories.map((el) => (
        <Category
          productsArr={products.filter((e) => e.category === el)}
          title={el}
          key={el}
        />
      ))}
    </Box>
  );
}
