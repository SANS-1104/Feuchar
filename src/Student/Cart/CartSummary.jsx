import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 

export default function YourOrders({ cart }) {
  const navigate = useNavigate();
  const { username } = useParams(); 

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 0;
  const total = subtotal - discount;

  const handleCheckout = () => {
    navigate(`/checkout`);
  };

  return (
    <div className="cart-summary">
      <div className='cart-summar-title'>Cart Total</div>
      <div className='cart-subtotal cart-tile'>
        <div className='cart-subtotal-label'>SUBTOTAL</div>
        <div className='cart-subtotal-value'>₹ {subtotal}</div>
      </div>
      <div className='cart-discount cart-tile'>
        <div className='cart-discount-label'>DISCOUNT</div>
        <div className='cart-discount-value'>---</div>
      </div>
      <div className='cart-total cart-tile'>
        <div className='cart-total-label'>TOTAL</div>
        <div className='cart-total-value'>₹ {total}</div>
      </div>
      <button className="checkout-button cart-checkoutBtn" onClick={handleCheckout}>
        Proceed To Checkout
      </button>
    </div>
  );
}
