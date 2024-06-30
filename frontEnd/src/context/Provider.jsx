import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './‎AppContext';
import data from '../data/db.json'
function Provider({ children }) {
   const [modifiers] = useState(
    data.sections[0].items[1].modifiers[0]
   );
  //  const [quantidade, setQuantidade] = useState(1);
  const [loading,setLoading]=useState(true)
  const [cartItems, setCartItems] = useState([]);
 
  const handleAddCart=()=>{
    const produtoAdicionadoCarrinho = cartItems.some(
        (cartProduct) => cartProduct.id === burger.id,
      );
    
      if (produtoAdicionadoCarrinho) {
        setCartItems((prev) =>
          prev.map((cartProduct) => {
            if (cartProduct.id === burger.id) {
              return {
                ...cartProduct,
                quantidade: cartProduct.quantidade + burger.quantidade,
        
              };
            }
            return cartProduct;
          }),
        );
        return;
      }
    ;
    // se não adicionar o produto na lista do carrinho
        setCartItems((cartItems)=>[...cartItems,burger])
    
       
      }
 
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