import "./Ler.css";

import React, { useState } from "react";
import { Link  } from "react-router-dom";
import icone from "../../assets/x.png";
import { FiMinus, FiPlus} from "react-icons/fi";


export default function LerDessert({ dessert,modifiers, onSair }) {
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
          <img className="image-1" src={dessert.images[0].image} />
        </div>
       
        <div className="pedido-detalhe">
        <h1>{dessert.name}</h1>
          <p className="description-pedido">{dessert.description}</p>

          <div className="opcao">
            <h2>{modifiers.name}</h2>
            <p>Select 1 option</p>
          </div>

          {modifiers.items.map((detalhe, index) => (
            <div className="opcao-items">
              <div className="opcao-items-left" key={index}>
                <b>{detalhe.name}</b>
                <p>R$:{detalhe.price.toFixed(2)}</p>
              </div>
              <input type="radio" />
            </div>
          ))}

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
