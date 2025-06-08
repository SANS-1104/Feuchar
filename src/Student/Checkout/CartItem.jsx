import React from 'react';

function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <tr className="cart-item-row">
      <td className="cart-product">
        <div className="remove-cartItem-btn"><button className="" onClick={() => onRemove(item.productId)}>✕</button></div>
        <div className="cart-item-image"><img className="" src='' alt='' /></div>
        <div className="item-name">{item.name}</div>
      </td>

      <td className="cart-price">
        ₹{item.price}
      </td>

      <td className="cart-quantity">
        <div className="cart-qty-inner">
          <button onClick={() => onQuantityChange(item.productId, -1)}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => onQuantityChange(item.productId, 1)}>＋</button>
        </div>
      </td>

      <td className="cart-total">
        ₹{item.price * item.quantity}
      </td>
    </tr>
  );
}

export default CartItem;
