import React from 'react';

export default function YourOrders({ cart }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; 
  const total = subtotal + shipping;

  return (
    <div className="cart-summary">
      <div className='cart-summar-title'>Your Order</div>

      <table className="checkout-order-table">
        <thead>
          <tr>
            <th className='checkout-prod'>PRODUCT</th>
            <th>Quantity</th>
            <th className='checkout-subtotal'>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="checkout-item-row">
              <td className="checkout-item-name">{item.name}</td>
              <td className="checkout-item-qty">{String(item.quantity).padStart(2, '0')}</td>
              <td className="checkout-item-price">₹ {item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='cart-subtotal cart-tile'>
        <div className='cart-subtotal-label'>SUBTOTAL</div>
        <div className='cart-subtotal-value'>₹ {subtotal}</div>
      </div>
      {/* <div className='cart-discount cart-tile'>
        <div className='cart-discount-label'>SHIPPING</div>
        <div className='cart-discount-value'>₹ {shipping}</div>
      </div> */}
      <div className='cart-total cart-tile'>
        <div className='cart-total-label'>Total</div>
        <div className='cart-total-value'>₹ {total}</div>
      </div>
    </div>
  );
}
