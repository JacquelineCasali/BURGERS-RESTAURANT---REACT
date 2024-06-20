import "./Card.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FETEST from "../../json/FETEST.json"
import { FiChevronUp } from "react-icons/fi";


export default function Dessert() {



  return (
 
     <>
      

          <div className="menu-sections">
            <h1>{FETEST.sections[2].name}</h1>
            <FiChevronUp size={26} cursor={"pointer"} color="#4F372F" />
          </div>
          {FETEST.sections[2].items.map((footdata, index) => (
          <Link to={`/${footdata.id}`} key={index}>
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


          </>
  );
}
