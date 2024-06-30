import "./Ler.css";

import React, { useContext, useMemo, useState } from "react";
import { Link  } from "react-router-dom";
import icone from "../../assets/x.png";
import { FiMinus, FiPlus} from "react-icons/fi";
// import formatCurrency from "../../utils/formatCurrency";
import Modifiers from "../Modifiers/Modifiers";
import AppContext from "../../context/‎AppContext";
import formatCurrency from "../../utils/formatCurrency";


export default function LerCard({ burger, onSair }) {
  const{cartItems,setCartItems } =useContext(AppContext);

// adiciona ao carrinho 
  function handleAddCart(){
const newItem=burger

// const existItem=cartItems.some(
//      (cartProduct) => cartProduct.id === newItem.id,
//      );

//      if(existItem){
//       return cartItems.map(item=>{
//         return item.id===newItem.id?{
//           ...item,quantidade:burger.quantidade+1}:item;
//       })
//      }
    // const produtoAdicionadoCarrinho = cartItems.some(
//     (cartProduct) => cartProduct.id === burger.id,
//   );

//   if (produtoAdicionadoCarrinho) {
//     setCartItems((prev) =>
//       prev.map((cartProduct) => {
//         if (cartProduct.id === burger.id) {
//           return {
//             ...cartProduct,
//             quantidade: cartProduct.quantidade + burger.quantidade,
    
//           };
//         }
//         return cartProduct;
//       }),
//     );
//     return;
//   }
// ;
// se não adicionar o produto na lista do carrinho
   return setCartItems((cartItems)=>[...cartItems,newItem])

   
  }

  const [quantidade, setQuantidade] = useState(1);

  const handleDecreaseQuantityClick = () => {
    setQuantidade((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantidade((prev) => prev + 1);
  };


  // const valor = cartItems.reduce((acc, item) => item.price + acc, 0);  
const valor =burger.price * quantidade 

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
          <p>{formatCurrency(burger.price  , 'BRL')}</p>
<Modifiers/>


          <div className="quantidade">
            <FiMinus
              className="FiMinus"
              size={36}
              onClick={handleDecreaseQuantityClick}
              variant="outline"
            />
{/* {
  cartItems.length > 0 && 
  <h1>{quantidade}</h1>
} */}

            <h1>{quantidade}</h1>
            <FiPlus
              className="FiPlus"
              size={36}
              onClick={handleIncreaseQuantityClick}
              variant="outline"
            />
          </div>
          <Link  onClick={onSair}>
          <button className="btn-adicionar" onClick={handleAddCart}
         >
      
           
      <p >  Add to Order {formatCurrency((valor),'BRL')}</p>
            </button>
            </Link>
        
        </div>
      </div>

    

    </section>
  );
}
