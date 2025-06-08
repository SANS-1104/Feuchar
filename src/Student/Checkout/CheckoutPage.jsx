import React from 'react';
import { useCart } from '../../context/CartContext';

import './checkout.css';
import BillingDetails from './BillingDetails';
import YourOrders from './YourOrders';

export default function CheckoutPage() {
  const { cart } = useCart();

  return (
    <div className="cart-container checkout-container">
      <div className='cart-Upper checkout-Upper'>
        <div className="cart-header checkout-header">Complete Your Divine Enrollment</div>
        <div className="cart-subheader">Checkout</div>
      </div>
      <div className='cart-lower checkout-lower'>
        <div className="cart-left checkout-left">
          <BillingDetails cart={cart} />
        </div>
        <div className="cart-right checkout-right">
          <YourOrders cart={cart} />
        </div>
      </div>
    </div>
  );
}
