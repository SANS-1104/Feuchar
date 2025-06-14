import React from 'react';

function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <tr className="cart-item-row">
      <td className="cart-product">
        <div className="remove-cartItem-btn">
          <button onClick={() => onRemove(item.productId)}>✕</button>
        </div>
        <div className="cart-item-image">
          <img src={item.image} alt='' />
        </div>
        <div className="item-name">{item.name}</div>
      </td>

      <td className="cart-price">
        ₹ {item.price}
      </td>

      <td className="cart-quantity">
        <div className="cart-qty-inner">
          <button
            onClick={() => {
              if (item.quantity === 1) {
                onRemove(item.productId);
              } else {
                onQuantityChange(item.productId, -1);
              }
            }}
          >−</button>
          <span>{item.quantity}</span>
          <button onClick={() => onQuantityChange(item.productId, 1)}>＋</button>
        </div>
      </td>

      <td className="cart-total">
        ₹ {item.price * item.quantity}
      </td>
    </tr>
  );
}

export default CartItem;
