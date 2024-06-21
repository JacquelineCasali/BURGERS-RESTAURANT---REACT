import "./Card.css";

import React from "react";
import { Link } from "react-router-dom";

import { FiChevronUp } from "react-icons/fi";
import db from '../../json/db.json'

export default function Drink() {



  return (
 
     <>
      

          <div className="menu-sections">
            <h1>{db.sections[1].name}</h1>
            <FiChevronUp size={26} cursor={"pointer"} color="#4F372F" />
          </div>
          {db.sections[1].items.map((footdata, index) => (
          <Link to={`/${footdata.id}`} key={index}>
            <div className="menu-item-drink">
              <div className="menu-item-left">
                <h2>{footdata.name}</h2>

                <p>{footdata.description}</p>

                <b>R$:{footdata.price.toFixed(2)}</b>
              </div>
            </div>
          </Link>

))}


          </>
  );
}
