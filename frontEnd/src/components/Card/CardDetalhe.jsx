// import "./Ler.css";

import React from "react";
import formatCurrency from "../../utils/formatCurrency";
import propTypes from "prop-types";

export default function CardDetalhe({ data }) {
  const { name, price, description } = data;

  return (
    <div className="menu-item menu-item-dessert">
      <div className="menu-item-left menu-item-dessert-left">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <b>{formatCurrency(price, "BRL")}</b>
      </div>
      <img src={data.images[0].image} />
    </div>
  );
}
CardDetalhe.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
