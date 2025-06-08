import React, { createContext, useState, useContext } from 'react';
import initialCartData from '../data/cartData'; 

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCartData);

  const updateQuantity = (id, amount) => {
    setCart(prev =>
      prev.map(item =>
        item.productId === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.productId !== id));
  };

  return (
    <CartContext.Provider value={{ cart, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy access
export const useCart = () => useContext(CartContext);
