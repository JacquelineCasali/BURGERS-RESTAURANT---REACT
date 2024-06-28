import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina

import data from "../../data/db.json";
import { useContext, useEffect, useState } from "react";
import LerCard from "../Ler/Ler";
import LerDrink from "../Ler/LerDrink";
import LerDessert from "../Ler/LerDessert";
import CardList from "./CardList";
import AppContext from "../../context/‎AppContext";
import Loading from "../Loading/Loading";
export default function Home() {
  const [burgers] = useState(data.sections[0].items);
  const [drink] = useState(data.sections[1].items);
  const [dessert] = useState(data.sections[2].items);

  const { modifiers, loading, setLoading } = useContext(AppContext);

  const [burgersLer, setBurgersLer] = useState(null);
  const [drinkToLer, setDrinkToLer] = useState(null);
  const [dessertLer, setDessertLer] = useState(null);

  const [showBurgers, setShowBurgers] = useState(false);
  const [showDrink, setShowDrink] = useState(false);
  const [showDessert, setShowDessert] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

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
            
          />
       
      : showDrink ? (
            loading && <Loading />) || 
        <LerDrink
          drink={drink.find((data) => data.id === drinkToLer)}
          modifiers={modifiers}
          onSair={handleFechar}
        />
      : showDessert ?  (loading && <Loading />) || 
        <LerDessert
          dessert={dessert.find((data) => data.id === dessertLer)}
          modifiers={modifiers}
          onSair={handleFechar}
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
    //   )
      }
    </>
  );
}
