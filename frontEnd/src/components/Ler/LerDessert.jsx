import "./Ler.css";

import React, { useContext, useState } from "react";
import { Link  } from "react-router-dom";
import icone from "../../assets/x.png";
import { FiMinus, FiPlus} from "react-icons/fi";
import formatCurrency from "../../utils/formatCurrency";
import Modifiers from "../Modifiers/Modifiers";
import AppContext from "../../context/‎AppContext";


export default function LerDessert({ dessert, onSair }) {
  const{cartItems,setCartItems} =useContext(AppContext);

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
  const handleAddCart=()=>{
    const produtoAdicionadoCarrinho = cartItems.some(
        (cartProduct) => cartProduct.id === dessert.id,
      );
    
      if (produtoAdicionadoCarrinho) {
        setCartItems((prev) =>
          prev.map((cartProduct) => {
            if (cartProduct.id === dessert.id) {
              return {
                ...cartProduct,
                quantidade: cartProduct.quantidade + dessert.quantidade,
              };
            }
            return cartProduct;
          }),
        );
        return;
      }
    
    // se não adicionar o produto na lista do carrinho
        setCartItems((cartItems)=>[...cartItems,dessert])
    
       
      }
    
 
  return (
    <section className="imagem-fundo">
      <div className="pedido">
        <div className="detalhe-image">
          <Link className="icone-x" onClick={onSair}>
            <img className="x" src={icone} alt="Logo" />
          </Link>
          <img className="image-1" src={dessert.images[0].image.replace(/\w\.jpg/gi, 'W.jpg')} />
        </div>
       
        <div className="pedido-detalhe">
        <h1>{dessert.name}</h1>
        <p>{formatCurrency(dessert.price, 'BRL')}</p>
          <p className="description-pedido">{dessert.description}</p>

        

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
      
            {/* onClick={handleAddToCartClick}> */}
            <p >  Add to Order {formatCurrency(dessert.price,'BRL')}</p>
            </button>
            </Link>
        </div>
      </div>

    

    </section>
  );
}
