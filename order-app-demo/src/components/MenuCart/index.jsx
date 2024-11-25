import React, { useState } from 'react';
import CheckOutPopUp from '../../components/CheckOutPopUp';
import './style.less';

const MenuCart = ({ cartItems, totalAmount, clearCart }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="cart-container">
      <div className="cart-summary">
        <div className="cart-icon">
          🛒 <span>{cartItems.length}</span>
        </div>
        <p>Total: ${totalAmount.toFixed(2)}</p>
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>

      {isCheckoutOpen && (
        <CheckOutPopUp
          totalAmount={totalAmount}
          onClose={() => {
            closeCheckout();
            clearCart();
          }}
        />
      )}
    </div>
  );
};

export default MenuCart;
