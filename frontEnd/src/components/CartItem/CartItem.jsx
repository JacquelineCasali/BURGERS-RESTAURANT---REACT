import "./CartItem.css";
import "../Cart/Cart.css";
import React, { useContext, useMemo, useState } from "react";
import formatCurrency from "../../utils/formatCurrency";
import propTypes from "prop-types";
import AppContext from "../../context/‎AppContext";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsCartDashFill } from "react-icons/bs";

export  const calcular=(state)=> {
  const { cartItems,setCartItems } = useContext(AppContext);
  return state.cartItems.reduce((acc, item) => item.price + acc, 0);
  // const valor = cartItems.reduce((acc, item) => item.price + acc, 0);
}

export default function CartItem({ data}) {
 
  const { id, name, price} = data;
  // const [] = useState(1);
 
  // adicionando item ao carrinho
   const { cartItems,setCartItems } = useContext(AppContext);

  // quantidade
   const [quantidade, setQuantidade] = useState(1);
 
  //  const handleAddCart=()=>{
  //   const produtoAdicionadoCarrinho = cartItems.some(
  //       (cartProduct) => cartProduct.id === burger.id,
  //     );
    
  //     if (produtoAdicionadoCarrinho) {
  //       setCartItems((prev) =>
  //         prev.map((cartProduct) => {
  //           if (cartProduct.id === burger.id) {
  //             return {
  //               ...cartProduct,
  //               quantidade: cartProduct.quantidade + burger.quantidade,
        
  //             };
  //           }
  //           return cartProduct;
  //         }),
  //       );
  //       return;
  //     }
  //   ;
  //   // se não adicionar o produto na lista do carrinho
  //       setCartItems((cartItems)=>[...cartItems,burger])
    
       
  //     }
   

const handleDecreaseQuantityClick= () => {
  //  menor igual a 1 remove do carrino 
  if(quantidade<=1){
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
      }
      setQuantidade((prev) => (prev === 1 ? prev : prev - 1));
 };



  const handleIncreaseQuantityClick = () => {
    setQuantidade((prev) => prev + 1);
   
  };

  return (
    <div className="cart-items">
   <div className="cart-items-pedidos">

     

      <div className="cart-items-pedido">
   
        <h2>{name}</h2>
        {/* <p className=" cart-item-price">{formatCurrency(price, "BRL")}</p> */}
        <p className=" cart-item-price">{formatCurrency(price*quantidade, "BRL")}</p>

   
        <BsCartDashFill
        className="BsCartDashFill" size={20}     
         onClick={ handleDecreaseQuantityClick }  />
  
      </div>
     
    {/* <div className="cart-quantidade">
        <FiMinus
          className="FiPlus"
          size={26}
          onClick={handleDecreaseQuantityClick}
          variant="outline"
        />
        
  <h1>{quantidade}</h1>
 
        
        <FiPlus
          className="FiPlus"
          size={26}
          onClick={handleIncreaseQuantityClick}
          variant="outline"
        />
      </div>  */}
 

      </div>

      
    
 
    
    </div>
  );
}
CartItem.propTypes = {
  data: propTypes.shape({}),
 
}.isRequired;
