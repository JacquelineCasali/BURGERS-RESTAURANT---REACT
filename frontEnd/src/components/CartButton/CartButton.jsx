import { AiOutlineShoppingCart } from 'react-icons/ai';

import './CartButton.css';
import { useContext } from 'react';
import AppContext from '../../context/‎AppContext';


function CartButton() {

  const { cartItems } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart__button"
     >
      <AiOutlineShoppingCart />

      
      <span className="cart-status">{cartItems.length}</span>
    </button>
  );
}

export default CartButton;