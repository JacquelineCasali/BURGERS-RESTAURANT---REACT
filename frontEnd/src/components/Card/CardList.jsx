import "./Card.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FiChevronUp } from "react-icons/fi";
import Menu from "../Menu/Menu";
import db from "../../data/db.json";
import Banner from "../Banner/Banner";

const CardList = ({ burgers, drink, dessert, onLer,onLerDrinks,onLerDessert }) => {
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

  return (
    <>
      <Banner />
      <section className="container">
        <div className="titulo">
          {/* filtro */}
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
              <h1>{db.sections[0].name}</h1>
              <FiChevronUp size={26} cursor={"pointer"} color="#4F372F" />
            </div>

            {teste.map((footdata, index) => (
           
           <Link onClick={() => onLer(footdata.id)} key={index}>
           <div
                className="menu-item"
              >
                {/* <div className="menu-item"> */}
                <div className="menu-item-left">
                  <h2>{footdata.name}</h2>

                  <p className="description">{footdata.description}</p>

                  <b>R$:{footdata.price.toFixed(2)}</b>
                </div>

                <img src={footdata.images[0].image} />
                </div>
                </Link>
            ))}

            <div className="menu-sections">
              <h1>{db.sections[1].name}</h1>
              <FiChevronUp size={26} cursor={"pointer"} color="#4F372F" />
            </div>
            {drinks.map((footdata, index) => (
              <Link onClick={() => onLerDrinks(footdata.id)} key={index}>
                <div className="menu-item-drink">
                  <div className="menu-item-left">
                    <h2>{footdata.name}</h2>

                    <p>{footdata.description}</p>

                    <b>R$:{footdata.price.toFixed(2)}</b>
                  </div>
                </div>
              </Link>
            ))}
            <div className="menu-sections">
              <h1>{db.sections[2].name}</h1>
              <FiChevronUp size={26} cursor={"pointer"} color="#4F372F" />
            </div>
            {desserts.map((footdata, index) => (
              <Link onClick={() => onLerDessert(footdata.id)} key={index}>
                <div className="menu-item">
                  <div className="menu-item-left">
                    <h2>{footdata.name}</h2>

                    <p>{footdata.description}</p>

                    <b>R$:{footdata.price.toFixed(2)}</b>
                  </div>
                  <img src={footdata.images[0].image} />
                </div>
              </Link>
            ))}
          </div>

          <div className="right">
            <div className="carrinho">
              <h1>Carrinho</h1>
            </div>
            <div className="item">
              <p className="item-Rg">Seu carrinho está vazio</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardList;
