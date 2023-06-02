import React, { useState, useEffect, useCallback } from 'react'
import Category from './category/Category'
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from '../../redux/actions/productActions';

export function MainPage() {

  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()
  const store = useSelector(store => store.products)

  
  useEffect(() => {

    dispatch(getProductsThunk());

  }, [dispatch]);

  const sortCategories = useCallback(() => {
    let shopCategories = [];

    for (let i = 0; i < store.products.length; i++) {
      shopCategories.push(store.products[i].category);
    }
    shopCategories = shopCategories.filter((el, i, self) => {
      return i === self.indexOf(el);
    });
    setCategories(shopCategories);
  }, [store.products]);
  
  useEffect(() => {
    sortCategories();
  }, [store.products, sortCategories]);
  

  return (
    <Box>
      {categories.map((el) => (
        <Category
          productsArr={store.products.filter((e) => e.category === el)}
          title={el}
          key={el}
        />
      ))}
    </Box>
  );
}
