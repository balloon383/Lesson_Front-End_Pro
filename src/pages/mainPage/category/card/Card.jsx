import React from "react";
import "./style.css";
import shoppingCart from '../../../../images/shopping-cart.png'

export default function Card({ product }) {
    
console.log(product);
    
    return (
    <section className="card">
      <img src='' className="card__img" alt="card Img" width='25px' height='25px'/>
      <h3 className="card__header">{product.title}</h3>
      <ul className="card__ul">
        <li className="card__li">
            {
                product.sale ? 
                <ul>
                    <li className="card__li--price-prev">${product.price}</li>
                    <li className="card__li--salePercent"> -{product.salePercent}%</li>
                    <li className="card__li--price">${product.price - (product.price * product.salePercent) / 100}</li>
                </ul>
                :
                <span className="card__li--price">${product.price}</span>
            }
        </li>
        <li className="card__li card__li--button">
          <img
            className="card__li--img"
            src={shoppingCart}
            alt="shopping cart"
            width="25px"
            height="25px"
          />
        </li>
      </ul>
    </section>
  );
}
