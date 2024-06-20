import "./Card.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FiChevronUp } from "react-icons/fi";


export default function Drink() {
  const [data, setData] = useState(null);
  const url = "https://cdn-dev.preoday.com/challenge/menu";
  // rota de leitura
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        //console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!data) return null;


  return (
 
     <>
      

          <div className="menu-sections">
            <h1>{data.sections[1].name}</h1>
            <FiChevronUp size={26} cursor={"pointer"} color="#4F372F" />
          </div>
          {data.sections[1].items.map((footdata, index) => (
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
