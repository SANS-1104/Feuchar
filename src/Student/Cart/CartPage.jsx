import React from 'react';
import { useCart } from '../../context/CartContext';

import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './cart.css';

function Cart() {
  const { cart, updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-container">
      <div className='cart-Upper'>
        <div className="cart-header">Secure Your Spot Now</div>
        <div className="cart-subheader">Cart</div>
      </div>
      <div className='cart-lower'>
        <div className="cart-left">
          <table className="cart-table">
            <thead>
              <tr>
                <th className='prod'>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th className='tot'>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <CartItem
                  key={item.productId}
                  item={item}
                  onQuantityChange={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-right">
          <CartSummary cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
