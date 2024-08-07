import "./Ler.css";

import React from "react";
import { Link  } from "react-router-dom";
import icone from "../../assets/x.png";
import formatCurrency from "../../utils/formatCurrency";


const Backgrobnd = {
  position:'fixed',
  top:0,
  buttom:'0',
  left:'0',
  right:'0',
  backgroundColor:'rgb(0,0,0,0.7)',
  width: '100%',
  height: '100%',
  
  zIndex:'1000',
  
    };
  
  const customStyles = {
      position:'fixed',
        top: '47%',
          left: '40%',
          backgroundColor:'#ffff',
          //   color:'#fff',
            // padding:'150px',
            borderRadius:'10px',
        transform: 'translate(-40%, -80%)',
        width: 'auto',
    };


export default function LerDessert({ dessert, onSair,handleAddCart }) {
  const {name,price,description}=dessert;

   return (



    <div style={Backgrobnd}>
<div style={customStyles} >
        <div className="detalhe-image">
        <button className="icone-x" onClick={onSair}>
            {/* <img className="x" src={icone} alt="Logo" /> */}
            <img  src={icone} alt="Logo" />
          </button>
          <img className="image-1" src={dessert.images[0].image.replace(/\w\.jpg/gi, 'W.jpg')} />
        </div>
       
        <div className="pedido-detalhe">
        <h1>{name}</h1>
        <p>{formatCurrency(price, 'BRL')}</p>

          <p className="description-pedido">{description}</p>

        

       

          <Link  onClick={onSair}>
          <button className="btn-adicionar"type="submit"  onClick={()=>handleAddCart(dessert)}
         >
      
      
            <p >  Adicionar ao Carrinho</p>
            </button>
            </Link>
        </div>
      </div>

    

    </div>
  );
}
