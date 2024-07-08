import "./Menu.css";

import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import db from "../../data/db.json";

export default function Menu() {
  return (
    <section className="menu-pedido">
      <Link to="burgers">
        <div className="menus" key="index">
          <img
            className="menu-image"
            src={db.sections[0].images[0].image.replace(/\w\.jpg/gi, "W.jpg")}
            alt="Foto"
          />
          <p className="text">{db.sections[0].name}</p>
        </div>
      </Link>
      <Link
        to="drinks"
        //altura negativa
        offset={-50}
      >
        {/* <a href="#drinks"> */}
        <div className="menus">
          <img
            className="menu-image"
            src={db.sections[1].images[0].image.replace(/\w\.jpg/gi, "W.jpg")}
            alt="Foto"
          />

          <p className="text">{db.sections[1].name}</p>
        </div>
      </Link>
      <Link to="desserts" offset={-60}>
        <div className="menus">
          <img
            className="menu-image"
            src={db.sections[2].images[0].image.replace(/\w\.jpg/gi, "W.jpg")}
            alt="Foto"
          />
          <p className="text">{db.sections[2].name}</p>
        </div>
      </Link>
    </section>
  );
}
