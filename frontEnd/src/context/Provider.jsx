import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './‎AppContext';
import data from '../data/db.json'
function Provider({ children }) {
 
  const [loading,setLoading]=useState(true)
  const [cartItems, setCartItems] = useState([]);
 //carrinho fechado
 const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {

loading,setLoading,
   cartItems,
   setCartItems,
   isCartVisible,
   setIsCartVisible,
  }

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;