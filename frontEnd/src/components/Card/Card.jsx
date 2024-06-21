import "./Card.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FiChevronUp } from "react-icons/fi";
import Menu from "../Menu/Menu";
import Drink from "./Drink";
import Dessert from "./Dessert";
import db from '../../json/db.json'
// import db from '../../json/db.json'
export default function Card() {





  // const [busca, setBusca] = useState("");
  // //corventendo para miniscula
  // const searchLowerCase = busca.toLowerCase();
  // console.log(busca);
  // FETEST.filter(
  //   (cliente) =>
  //     cliente.name.toLowerCase().includes(searchLowerCase)
  //     // ||
  //     // cliente.email.toLowerCase().includes(searchLowerCase)

  // );

  return (
    <section className="container">
      <div className="titulo">
        {/* filtro */}

        <input
          type="texts"
          // value={busca}
          //onChange={(e) => setBusca(e.target.value)}
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
        
     
            <h1 >{db.sections[0].name}</h1>
            <FiChevronUp size={26} cursor={"pointer"} color="#4F372F" />
          </div>

          {db.sections[0].items.map((footdata, index) => (
            <Link to={`/${footdata.id}`} key={index}>
              <div className="menu-item">
                <div className="menu-item-left">
                  <h2>{footdata.name}</h2>

                  <p className="description">{footdata.description}</p>

                  <b>R$:{footdata.price.toFixed(2)}</b>
                </div>

                <img src={footdata.images[0].image} />
              </div>
            </Link>
          ))}

          <Drink />

          <Dessert />
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
  );
}
