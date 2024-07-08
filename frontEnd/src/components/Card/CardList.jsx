import "./Card.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import { FiChevronUp } from "react-icons/fi";
import Menu from "../Menu/Menu";
import data from "../../data/db.json";
import Banner from "../Banner/Banner";

import CardDetalhe from "./CardDetalhe";
import Cart from "../Cart/Cart";
import CardDetalheDrink from "./CardDetalheDrink";
import AppContext from "../../context/‎AppContext";

import "../Cart/Cart.css";

const CardList = ({
  burgers,
  drink,
  dessert,
  onLer,
  onLerDrinks,
  onLerDessert,
}) => {
 
  const{cartItems,setCartItems} =useContext(AppContext);
  const [busca, setBusca] = useState("");

  //   // filtro
  // //convertendo em letra minuscula
  const searchLowerCase = busca.toLowerCase();
  const teste = burgers.filter((item) =>
    item.name.toLowerCase().includes(searchLowerCase)
  );
  const drinks = drink.filter((item) =>
    item.name.toLowerCase().includes(searchLowerCase)
  );
  const desserts = dessert.filter((item) =>
    item.name.toLowerCase().includes(searchLowerCase)
  );

  const handleChange = (item, d) =>{
		let ind = -1;
		cartItems.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cartItems;
		tempArr[ind].visible += d;
		
		if (tempArr[ind].visible === 0)
			tempArr[ind].visible = 1;
		setCartItems([...tempArr])
	}

 

  return (
    <>
      <Banner />
      <section className="container">
        <div className="titulo">
          <input
            type="texts"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="pesquisa"
            placeholder="Search menu itens"
          />
          <div className="lupa">
            <BsSearch size={30} />
          </div>
        </div>

        <div className="menu">
          <div className="left">
            <Menu />

            <div className="menu-sections">
              <h1 id="burgers">{data.sections[0].name}</h1>
              <FiChevronUp size={26} cursor={"pointer"} color="#4F372F" />
            </div>

            {teste.map((product) => (
              <Link key={product.id} onClick={() => onLer(product.id)}>
                <CardDetalhe data={product} />
              </Link>
            ))}
            <div className="menu-sections">
              <h1 id="drinks">{data.sections[1].name}</h1>
              <FiChevronUp size={26} cursor={"pointer"} color="#4F372F" />
            </div>

            {drinks.map((product) => (
              <Link key={product.id} onClick={() => onLerDrinks(product.id)}>
                <CardDetalheDrink data={product} />
              </Link>
            ))}
            <div className="menu-sections">
              <h1 id="desserts">{data.sections[2].name}</h1>
              <FiChevronUp size={26} cursor={"pointer"} color="#4F372F" />
            </div>
            {desserts.map((product) => (
              <Link key={product.id} onClick={() => onLerDessert(product.id)}>
                <CardDetalhe data={product} />
              </Link>
            ))}
          </div>

          <Cart cartItems={cartItems}
           setCartItems={setCartItems} 
           handleChange={handleChange}
          />
        </div>
      </section>
    </>
  );
};

export default CardList;
