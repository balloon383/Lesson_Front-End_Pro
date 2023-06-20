import React, { useEffect } from 'react'
import CartItem from './cartItems/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../../redux/actions/productActions';

export default function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);
  let products = useSelector((store) => store.user.shoppingCart);
  
  return (
    <section className="cart__box">
      <h2>Items in Shopping Cart</h2>
      <table className="cart__table">
        <tbody className="table__body">
          <tr className="table__header">
            <td>Item description</td>
            <td>Price</td>
            <td>Sale</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Action</td>
          </tr>
          {products.map((el) => (
            <CartItem obj={el} key={el.id} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
