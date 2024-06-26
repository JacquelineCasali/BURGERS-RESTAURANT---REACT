import "./Ler.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import icone from "../../assets/x.png";
import { FiMinus,FiPlus} from "react-icons/fi";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/‎AppContext";


export default function LerDrink({ drink, onSair }) {
  const{cartItems,setCartItems} =useContext(AppContext);
 
  const handleAddCart=()=>{
    // const produtoAdicionadoCarrinho = cartItems.some(
    //     (cartProduct) => cartProduct.id === drink.id,
    //   );
    
    //   if (produtoAdicionadoCarrinho) {
    //     setCartItems((prev) =>
    //       prev.map((cartProduct) => {
    //         if (cartProduct.id === drink.id) {
    //           return {
    //             ...cartProduct,
    //             quantidade: cartProduct.quantidade + drink.quantidade,
    //           };
    //         }
    //         return cartProduct;
    //       }),
    //     );
    //     return;
    //   }
    
    // se não adicionar o produto na lista do carrinho
        setCartItems((cartItems)=>[...cartItems,drink])
    
       
      }

  //  quantidade
  const [quantidade, setQuantidade] = useState(1);

  // quantidade
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
    
        </div>
       
        <div className="pedido-detalhe">
        <h1>{drink.name}</h1>
          
          <p>{formatCurrency(drink.price, 'BRL')}</p>
        
      
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
               
               <p >  Add to Order {formatCurrency(drink.price,'BRL')}</p>
            </button>
            </Link>
        </div>
      </div>

    

    </section>
  );
}
