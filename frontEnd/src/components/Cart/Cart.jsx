import "./Cart.css";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/‎AppContext";

import formatCurrency from "../../utils/formatCurrency";
import data from '../../data/db.json'
import CartButton from "../CartButton/CartButton";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsCartDashFill } from "react-icons/bs";
import CartItem from "../CartItem/CartItem";
const Cart = () => {
  const { cartItems ,setCartItems} = useContext(AppContext);
  const { id, name, price } = data;



 const valor = cartItems.reduce((acc, item) => item.price + acc, 0);
//  const valor = cartItems.some(
//   (cartProduct) => cartProduct.id === burger.id,
// );

  return (
    <>
    <section>
      <div className="right">
        <div className="carrinho">
          <CartButton />
          <h1>Carrinho</h1>
        </div>

        {cartItems.length===0 &&
        // <div className="cart-items">

        <p className="cart-vazio">Seu carrinho está vazio</p>
        // </div>
        }

        <div className="cart-items">
        { cartItems.map((cartItem) => 
        <CartItem key={cartItem.id} data={cartItem}
       />
      
      ) 
        
        }
                 
                   </div>   
{cartItems.length>0&&(
             
             <>
   
 
            
             <div className="subtotal">
                <h1>SubTotal</h1>
            <p className="preco">{formatCurrency((valor), "BRL")}</p>
              </div>
       
              {/* <div className="subtotal">
                <h1>Frete</h1>
                <p>{formatCurrency(frete, "BRL")}</p>
              </div> */}
       
            <div className="subtotal">
        <h1>Total</h1>
        <p className="preco">{formatCurrency((valor), "BRL")}</p>
      </div>  
 </>

)}     


      </div>
      </section>
    </>
  );
};

export default Cart;
