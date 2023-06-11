import React, { useEffect } from 'react'
import images from '../../../../images'

export default function CartItem({item}) {
    
  return (
    <tr>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.sale ? -item.salePercent  : "-"}</td>
        <td><input type="text" value={item.count} /></td>
        <td>{'del'}</td>
    </tr>
  )
}
