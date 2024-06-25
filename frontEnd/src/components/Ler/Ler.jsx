import "./Ler.css";

import React, { useContext, useState } from "react";
import { Link  } from "react-router-dom";
import icone from "../../assets/x.png";
import { FiMinus, FiPlus} from "react-icons/fi";
// import formatCurrency from "../../utils/formatCurrency";
import Modifiers from "../Modifiers/Modifiers";
import AppContext from "../../context/‎AppContext";


export default function LerCard({ burger, onSair }) {
  const{cartItems,setCartItems} =useContext(AppContext);
  const handleAddCart=()=>{

    setCartItems([...cartItems,burger])

   
  }

  const [quantidade, setQuantidade] = useState(1);

  const handleDecreaseQuantityClick = () => {
    setQuantidade((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantidade((prev) => prev + 1);
  };


  return (
    <section className="imagem-fundo">
      <div className="pedido">
        <div className="detalhe-image">
          <Link className="icone-x" onClick={onSair}>
            <img className="x" src={icone} alt="Logo" />
          </Link>
          <img className="image-1" src={burger.images[0].image.replace(/\w\.jpg/gi, 'W.jpg')} />
        </div>
       
        <div className="pedido-detalhe">
        <h1>{burger.name}</h1>
          <p className="description-pedido">{burger.description}</p>
<Modifiers/>


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
          <Link  onClick={onSair}>
          <button className="btn-adicionar"type="submit"  onClick={handleAddCart}
         >
      
           
            Add to Order .{" "}
            </button>
            </Link>
        
        </div>
      </div>

    

    </section>
  );
}
