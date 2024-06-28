import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './‎AppContext';
import data from '../data/db.json'
function Provider({ children }) {


   const [modifiers] = useState(
    data.sections[0].items[1].modifiers[0]
   );
 
  const [loading,setLoading]=useState(true)


  const [cartItems, setCartItems] = useState([]);
  const value = {
    modifiers,
loading,setLoading,
   cartItems,
   setCartItems

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