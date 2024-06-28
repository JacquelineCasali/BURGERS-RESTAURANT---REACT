// import "./CartItem.css";
// import "../Cart/Cart.css";
// import React, { useContext, useMemo, useState } from "react";
// import formatCurrency from "../../utils/formatCurrency";
// import propTypes from "prop-types";
// import { BsFillCartPlusFill } from "react-icons/bs";
// import AppContext from "../../context/‎AppContext";
// import { FiMinus, FiPlus } from "react-icons/fi";

// export default function CartItem({ data }) {

//   const { id, name, price } = data;
//   const [quantidade, setQuantidade] = useState(1);
//   // adicionando item ao carrinho
//   // const { adicionarProdutoCarrinho } = useContext(CarrinhoContext);
//   const { cartItems } = useContext(AppContext);
//   // quantidade
//   const handleDecreaseQuantityClick = () => {
//     setQuantidade((prev) => (prev === 1 ? prev : prev - 1));
//     // const updatedItems = cartItems.filter((item) => item.id != id);
//     // setCartItems(updatedItems);
//   };

//   const handleIncreaseQuantityClick = () => {
//     setQuantidade((prev) => prev + 1);
   
//   };

//   return (
//     <div className="cart-items-pedidos">
//       <div className="cart-items-pedido">
//         <h2>{name}</h2>
//         <p className=" cart-item-price">{formatCurrency(price, "BRL")}</p>
//       </div>

//       <div className="cart-quantidade">
//         <FiMinus
//           className="FiPlus"
//           size={26}
//           onClick={handleDecreaseQuantityClick}
//           variant="outline"
//         />

//         <h1>{quantidade}</h1>
//         <FiPlus
//           className="FiPlus"
//           size={26}
//           onClick={handleIncreaseQuantityClick}
//           variant="outline"
//         />
//       </div>


//     </div>
//   );
// }
// CartItem.propTypes = {
//   data: propTypes.shape({}),
// }.isRequired;
