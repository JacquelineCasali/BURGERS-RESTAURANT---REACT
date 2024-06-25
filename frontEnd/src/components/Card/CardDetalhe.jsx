// import "./Ler.css";

import React, { useContext, useState } from "react";
import formatCurrency from "../../utils/formatCurrency";
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from "react-icons/bs";
import AppContext from "../../context/‎AppContext";

export default function CardDetalhe({ data }) {
  
  const {name,price,description}=data;
  // const{cartItems,setCartItems} =useContext(AppContext);
  // const handleAddCart=()=>{

  //   setCartItems([...cartItems,data])
  //     }
  return (
    
   
                 
    <div className="menu-item"
  >
     
     
     <div className="menu-item-left">
     
     
        <h2>{name}</h2>
          <p className="description">{description}</p>
          <b>{formatCurrency(price, 'BRL')}</b>
    
</div>
<img src={data.images[0].image} />



</div>
    

  
  );
}
CardDetalhe.propTypes = {
  data: propTypes.shape({}),
}.isRequired;