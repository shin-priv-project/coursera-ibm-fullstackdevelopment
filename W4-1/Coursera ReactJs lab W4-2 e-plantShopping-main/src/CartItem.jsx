import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, toggleCart } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const cartToggle = useSelector(state => state.cart.cartToggle);
  const dispatch = useDispatch();

  const handleContinueShopping = (e) => {
    e.preventDefault();
    dispatch(toggleCart());
  };

const handleCheckoutShopping = (e) => {
  alert("Functionality to be adeed for future reference");
}

  const handleIncrement = (item) => {
    const plant = item.name;
    const amount = item.quantity + 1;
    dispatch(updateQuantity({plant, amount}));
  };

  const handleDecrement = (item) => {
    const plant = item.name;
    // console.log(item.name, item.quantity)
    if (item.quantity > 0) {
      console.log("Decrement function invoked.")
      const amount = item.quantity - 1;
      dispatch(updateQuantity({plant, amount}));
    } else {
      dispatch(removeItem(item));
    };
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    const totalAmount = cart.reduce((total, item) => total + parseFloat(item.cost.replace('$', ''))*item.quantity, 0);
    return totalAmount;
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const priceFloat = parseFloat(item.cost.replace('$', ''));
    const totalCost = priceFloat*item.quantity;
    console.log(item.name, item.cost, item.quantity, totalCost);
    return totalCost;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'>Total amount: ${calculateTotalAmount()}</div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


