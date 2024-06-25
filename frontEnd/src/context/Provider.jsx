import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './‎AppContext';
import data from '../data/db.json'
function Provider({ children }) {

  const [burgers, setArray] = useState(data.sections[0].items);
  const [drink, setDrink] = useState(data.sections[1].items);
  const [dessert, setDesset] = useState(data.sections[2].items);
  const [modifiers, setModifiers] = useState(
    data.sections[0].items[1].modifiers[0]
  );
  const [burgersLer, setBurgersLer] = useState(null);
  const [drinkToLer, setDrinkToLer] = useState(null);
  const [dessertLer, setDessertLer] = useState(null);

  const [showBurgers, setShowBurgers] = useState(false);
  const [showDrink, setShowDrink] = useState(false);
  const [showDessert, setShowDessert] = useState(false);
  const [loading,setLoading]=useState(true)

  const [cartItems, setCartItems] = useState([]);
  const value = {
    burgers, setArray,
    drink,dessert,modifiers,
    burgersLer, setBurgersLer,drinkToLer, setDrinkToLer
  ,dessertLer, setDessertLer,showBurgers,
   setShowBurgers,showDrink, setShowDrink, showDessert,
   setShowDessert,loading,setLoading,
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