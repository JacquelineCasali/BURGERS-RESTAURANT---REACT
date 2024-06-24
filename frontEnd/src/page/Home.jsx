import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina

import Banner from "../components/Banner/Banner";
import CardList from "../components/Card/CardList";
import data from '../data/db.json'
import { useState } from 'react';

import LerCard from "../components/Ler/Ler";
import LerDrink from "../components/Ler/LerDrink";
import LerDessert from "../components/Ler/LerDessert";
export default function Home() {
  // const [sections,setSections]=useState([])
 
  const [burgers, setArray] = useState(data.sections[0].items);
  const [drink, setDrink] = useState(data.sections[1].items);
  const [dessert, setDesset] = useState(data.sections[2].items);
  const [modifiers, setModifiers] = useState(data.sections[0].items[1].modifiers[0]);
  
 
  
  // console.log(modifiers)
  
  const [burgersLer, setBurgersLer] = useState(null);
  const [drinkToLer, setDrinkToLer] = useState(null);
  const [dessertLer, setDessertLer] = useState(null);

  const [showBurgers, setShowBurgers] = useState(false);
  const [showDrink, setShowDrink] = useState(false);
  const [showDessert, setShowDessert] = useState(false);
  
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
  // const deletePlayer = (id) => {
  //   const updatedPlayers = burgers.filter((player) => player.id !== id);
  //   setPlayers(updatedPlayers);
  //  setShowDeletePlayer(false);
  // };

  
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




{showBurgers?(
<LerCard
      burger={burgers.find((data) => data.id === burgersLer)}
      modifiers={modifiers}
      onSair={handleFechar}
     
/>
):
showDrink?(
  <LerDrink
  drink={drink.find((data) => data.id === drinkToLer)}
        modifiers={modifiers}
        onSair={handleFechar}
       
  />
  ):
  showDessert?(
    <LerDessert
    dessert={dessert.find((data) => data.id === dessertLer)}
          modifiers={modifiers}
          onSair={handleFechar}
         
    />
    ):



(
 
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
   </>
   
    

  )
}
