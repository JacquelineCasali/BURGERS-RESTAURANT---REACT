import "./Cart.css";
import React, { useState, useEffect,useContext } from "react";

import formatCurrency from "../../utils/formatCurrency";
import CartButton from "../CartButton/CartButton";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsCartDashFill } from "react-icons/bs";
import AppContext from "../../context/‎AppContext";
import { Link } from "react-router-dom";
const Cart = ({ cartItems, setCartItems, handleChange }) => {
  const [price, setPrice] = useState(0);
  const{isCartVisible } =useContext(AppContext);
  const handlePrice = () => {
    let ans = 0;
    cartItems.map((item) => (ans += item.visible * item.price));
    setPrice(ans);
  };
  const handleRemove = (id) => {
    const remove = cartItems.filter((item) => item.id !== id);
    setCartItems(remove);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
       
       
       

     

          {cartItems.length === 0 && (
            <p className="cart-vazio">Seu carrinho está vazio</p>
          )}

          <div className="cart-items">
            {cartItems?.map((item) => (
              <div className="cart-items-pedidos" key={item.id}>
                <div className="cart-items-pedido">
                  <h2>{item.name}</h2>
                  <p className=" cart-item-price">
                    {formatCurrency(item.price, "BRL")}
                  </p>
                  <p className=" cart-item-price">
                    {formatCurrency(item.price * item.visible, "BRL")}
                  </p>

                  <BsCartDashFill
                    className="BsCartDashFill"
                    size={20}
                    onClick={() => handleRemove(item.id)}
                  />
                </div>
                <div className="cart-quantidade">
                  <FiMinus
                    className="FiPlus"
                    size={26}
                    onClick={() => handleChange(item, -1)}
                    variant="outline"
                  />

                  <h1>{item.visible}</h1>
                  <FiPlus
                    className="FiPlus"
                    size={26}
                    onClick={() => handleChange(item, +1)}
                    variant="outline"
                  />
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 && (
            <>
              <div className="subtotal">
                <h1>SubTotal</h1>
                <p className="preco">{formatCurrency(price, "BRL")}</p>
              </div>

              <div className="subtotal">
                <h1>Total</h1>
                <p className="preco">{formatCurrency(price, "BRL")}</p>
              </div>

<button className="btn-pagamento">
<Link  to={`/login`}>Ir Para Pagamento</Link>
  </button>

            </>
          )}

      </section>
    </>
  );
};

export default Cart;
