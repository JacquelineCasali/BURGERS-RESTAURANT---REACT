// import "./Ler.css";

import React, { useContext, useState } from "react";
import formatCurrency from "../../utils/formatCurrency";
import propTypes from "prop-types";
import AppContext from "../../context/‎AppContext";

export default function CardDetalheDrink({ data }) {
  const { name, price, description } = data;
  return (
    <div className="menu-item-drink">
      <div className="menu-item-left-drink">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <b>{formatCurrency(price, "BRL")}</b>
      </div>
    </div>
  );
}
CardDetalheDrink.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
