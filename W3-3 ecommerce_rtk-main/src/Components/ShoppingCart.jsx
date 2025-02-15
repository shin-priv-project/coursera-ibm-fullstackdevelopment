import React from 'react';
import './ShoppingCart.css'; 

import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity
import './ShoppingCart.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId));
  };
  // ここでdispatchによって定義されたfunctionはどうやって使う？
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
  };
  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  };

  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name} - ${item.price}</span>
            <div className="quantity-controls">
              <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      <div>{totalAbount ? <div>"The total amount is {totalAmount}</div> : ""}</div>
      {/* Inside the expression, there's a ternary operator for conditional rendering in JSX. */}
    </div>
  
    </>
  );
};

export default ShoppingCart;
