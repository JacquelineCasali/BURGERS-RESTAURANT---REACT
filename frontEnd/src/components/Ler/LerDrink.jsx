import "./Ler.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BotaoVoltar from "../Voltar/BotaoVoltar";
import { Link, useParams } from "react-router-dom";
import icone from "../../assets/x.png";
import { FiMinus,FiPlus} from "react-icons/fi";
import { Border } from "react-bootstrap-icons";
import db from "../../data/db.json";

export default function LerDrink({ drink, onSair }) {
  // const handleDelete = () => {
  //   deletePlayer(player.id);
  // };

  //  quantidade
  const [quantidade, setQuantidade] = useState(1);
  // adicionando item ao carrinho
  // const { adicionarProdutoCarrinho } = useContext(CarrinhoContext);

  // quantidade
  const handleDecreaseQuantityClick = () => {
    setQuantidade((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantidade((prev) => prev + 1);
  };

  // const handleAddToCartClick = () => {
  //   adicionarProdutoCarrinho({ ...product, quantidade });
  // };

  return (
    <section className="imagem-fundo">
      <div className="pedido">
        <div className="detalhe-image">
        <Link className="icone-x" onClick={onSair}>
            <img className="x" src={icone} alt="Logo" />
          </Link>
    
        </div>
       
        <div className="pedido-detalhe">
        <h1>{drink.name}</h1>
          
          <p>R$:{drink.price.toFixed(2)}</p>
          
          <div className="quantidade">
            <FiMinus
              className="FiMinus"
              size={36}
              onClick={handleDecreaseQuantityClick}
              variant="outline"
            />

            <h1>{quantidade}</h1>
            <FiPlus
              className="FiPlus"
              size={36}
              onClick={handleIncreaseQuantityClick}
              variant="outline"
            />
          </div>

          <button className="btn-adicionar">
            {/* onClick={handleAddToCartClick}> */}
            Add to Order .{" "}
          </button>
        </div>
      </div>

    

    </section>
  );
}
