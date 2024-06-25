import "./Cart.css";
import React, { useContext } from "react";
import AppContext from "../../context/‎AppContext";
import CartItem from "../CartItem/CartItem";
import formatCurrency from "../../utils/formatCurrency";
const Cart = () => {
  const{cartItems} =useContext(AppContext);
 //total do carrinho
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);
 
  return (
    <>
       
          <div className="right">
            <div className="carrinho">
              <h1>Carrinho</h1>
            </div>
            {/* <p>Seu Carrinho esta vazio</p> */}
            
            <div className="cart-items"> 
            { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }

          </div>
           
          
  

       
    <div className="subtotal">
    <h1>SubTotal</h1>
    <p >{formatCurrency(totalPrice,'BRL')}</p>
    </div>
     
  
    <div className="subtotal">
 <h1>Total</h1>
 <p className="preco">{formatCurrency(totalPrice,'BRL')}</p>
 </div>
          </div>
    </>
  );
};

export default Cart;
