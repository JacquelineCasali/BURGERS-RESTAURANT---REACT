import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina

import data from "../../data/db.json";
import { useContext, useEffect, useState } from "react";
import LerCard from "../Ler/Ler";
import LerDrink from "../Ler/LerDrink";
import LerDessert from "../Ler/LerDessert";
import CardList from "./CardList";
import AppContext from "../../context/‎AppContext";
import Loading from "../Loading/Loading";
import Modal from 'react-modal';

Modal.setAppElement('#root');
export default function Home() {

 
  const [burgers] = useState(data.sections[0].items);
  const [drink] = useState(data.sections[1].items);
  const [dessert] = useState(data.sections[2].items);

  const { modifiers, loading, setLoading , cartItems,setCartItems } = useContext(AppContext);

  const [burgersLer, setBurgersLer] = useState(null);
  const [drinkToLer, setDrinkToLer] = useState(null);
  const [dessertLer, setDessertLer] = useState(null);

  const [showBurgers, setShowBurgers] = useState(false);
  const [showDrink, setShowDrink] = useState(false);
  const [showDessert, setShowDessert] = useState(false);
  
  const [warning, setWarning] = useState(false);
  useEffect(() => {
    setLoading(false);
  }, []);


  const handleAddCart=(burger)=>{
    let isPresent = false;
    cartItems.forEach((product)=>{
    if(burger.id===product.id)
      isPresent = true;
   })
   if(isPresent){
    setWarning(true)
  
    // tempo limite 
  setTimeout(()=>{
  setWarning(false)
  },2000)
  return
   }
  
   setCartItems([...cartItems,burger])
   
  
  }
  const handleAddCartDessert=(dessert)=>{
    let isPresent = false;
    cartItems.forEach((product)=>{
    if(dessert.id===product.id)
      isPresent = true;
   })
   if(isPresent){
    setWarning(true)
  
    // tempo limite 
  setTimeout(()=>{
  setWarning(false)
  },2000)
  return
   }
  
   setCartItems([...cartItems,dessert])
   
   
       
      }
 
      const handleAddCartDrink=(drink)=>{
        let isPresent = false;
        cartItems.forEach((product)=>{
        if(drink.id===product.id)
          isPresent = true;
       })
       if(isPresent){
        setWarning(true)
      
        // tempo limite 
      setTimeout(()=>{
      setWarning(false)
      },2000)
      return
       }
      
       setCartItems([...cartItems,drink])
       
       
           
          }
     

  const handleburgersLer = (id) => {
    setBurgersLer(id);
    setShowBurgers(true);
  };
  const handleDrinksLer = (id) => {
    setDrinkToLer(id);
    setShowDrink(true);
  };

  const handleDesertLer = (id) => {
    setDessertLer(id);
    setShowDessert(true);
  };
  const handleFechar = () => {
    setShowBurgers(false);
    setShowDrink(false);
    setShowDessert(false);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet title="Cardápio" />
      </HelmetProvider>

      {showBurgers ? 
        (loading && <Loading />) || 
          <LerCard
            burger={burgers.find((data) => data.id === burgersLer)}
            modifiers={modifiers}
            onSair={handleFechar}
            handleAddCart={handleAddCart}
          />
       
      : showDrink ? (
            loading && <Loading />) || 
        <LerDrink
          drink={drink.find((data) => data.id === drinkToLer)}
          modifiers={modifiers}
          onSair={handleFechar}
          handleAddCart={handleAddCartDrink}
        />
      : showDessert ?  (loading && <Loading />) || 
        <LerDessert
          dessert={dessert.find((data) => data.id === dessertLer)}
          modifiers={modifiers}
          onSair={handleFechar}
          handleAddCart={handleAddCartDessert}
        />
       : 
         (loading && <Loading />) || (
        <CardList
          burgers={burgers}
          drink={drink}
          dessert={dessert}
          onLer={handleburgersLer}
          onLerDrinks={handleDrinksLer}
          onLerDessert={handleDesertLer}
        />
      )


      }
        {
      warning &&   <div className='warning'>Item ja foi adicionado ao carrinho</div>
     }
    </>
  );
}
