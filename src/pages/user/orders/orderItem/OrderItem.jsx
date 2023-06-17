import React from 'react'
import images from '../../../../images';
import './style.css'
export default function OrderItem({item}) {
  return (
    <tr className="item__box">
      <td className="item_description">
        <img
          src={images[item.img]}
          alt="item img"
          width="150px"
          height="150px"
        />{" "}
        {item.title}
      </td>
      <td>{item.price}</td>
      <td>{item.sale ? -item.salePercent + "%" : "-"}</td>
      <td>{item.count}</td>
      <td>
        $
        {item.sale
          ? item.price * item.count -
            (item.price * item.count * item.salePercent) / 100
          : item.price * item.count}
      </td>
    </tr>
  );
}
