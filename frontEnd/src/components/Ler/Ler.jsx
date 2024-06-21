import "./Ler.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BotaoVoltar from "../Voltar/BotaoVoltar";
import { Link, useParams } from "react-router-dom";
import icone from "../../assets/x.png";
import { FiMinus, FiMinusCircle, FiPlus, FiPlusCircle } from "react-icons/fi";
import { Border } from "react-bootstrap-icons";
import db from '../../json/db.json'
export default function LerCard() {


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

const handleAddToCartClick = () => {
  adicionarProdutoCarrinho({ ...product, quantidade });
};


  return (
    
    
    
    <section className="imagem-fundo"  >
   <div className="pedido">
    <div className="detalhe-image">
     
    <Link className="icone-x" to={"/"}>
            <img className="x" src={icone} alt="Logo" />
          </Link>
  
  
           
           
           
    
   
 
      <img className="image-1"
      src={db.sections[0].items[1].images[0].image}
       alt="" /> 
       
       </div>



<div className="pedido-detalhe">   

  
<h1>{db.sections[0].items[1].name}</h1>
  

 <p className="description-pedido">{db.sections[0].items[1].description}</p>

  <div className="opcao">
  <h2>{db.sections[0].items[1].modifiers[0].name}</h2>
  <p>Select 1 option</p>
  {/* <p>{FETEST.sections[0].items[0].modifiers.name}</p> */}
 
  </div>
 
  {db.sections[0].items[1].modifiers[0].items.map((detalhe, index) => (
   <div className="opcao-items" >
   <div className="opcao-items-left" key={index} >

  <b>{detalhe.name}</b>
  <p>R$:{detalhe.price.toFixed(2)}</p>



</div>
<input type="radio" />
   </div>
 

  ))}
            
                




 
<div className="quantidade">

<FiMinus className="FiMinus" size={36}
onClick={handleDecreaseQuantityClick}
variant="outline"
/>
{/* <h1 >1</h1> */}
<h1>{quantidade}</h1>
<FiPlus className="FiPlus" size={36}
onClick={handleIncreaseQuantityClick}
variant="outline"
/>

</div>



<button className="btn-adicionar"
  onClick={handleAddToCartClick}
>Add to Order . </button>

{/* <b>R$:{FETEST.sections[0].items[0].price.toFixed(2)}</b> */}
</div>

 
</div>
</section>

  
  );
}
