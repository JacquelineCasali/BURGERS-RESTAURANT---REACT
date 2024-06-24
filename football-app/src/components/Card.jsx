import React from "react";

import { Link } from "react-router-dom";

import db from "../data/db.json";

// filtrando videos por categoria ou titulo
// filtrando videos por categoria ou titulo

// import db from '../../json/db.json'
const Card = ({player, editCard}) => {
  return (
    <section className="container">
   
   <div className="menu-item">
                <div className="menu-item-left">
                  <h2>{player.name}</h2>

                  <p className="description">{player.description}</p>

                  <b>R$:{player.price.toFixed(2)}</b>
                </div>

                <img src={player.images[0].image} />
              </div>
   
      {/* <div className="menu-sections">
        {array.map((array, i) => (
          <div>
            <h1 key={i}>{array.name}</h1>
             </div>
        ))}
      </div> */}
    </section>
  );
};
export default Card;
