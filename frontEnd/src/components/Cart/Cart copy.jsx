// import "./Cart.css";
// import React, { useContext, useState } from "react";
// import AppContext from "../../context/‎AppContext";
// import CartItem from "../CartItem/CartItem";
// import formatCurrency from "../../utils/formatCurrency";

// import CartButton from "../CartButton/CartButton";
// const Cart = () => {
//   const { cartItems } = useContext(AppContext);

//   //total do carrinho
//   //  const subtotal = useMemo(() => {
//   //   return cartItems.reduce((acc, item) => {
//   //     return (
//   //       acc + Number(item.price) * quantidade
//   //     );
//   //   }, 0);
//   // }, []);

//   const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

//   return (
//     <>
//       {/* <div className="right"> */}

//       <div className="cart-items">
//         {cartItems.map((cartItem) => (
//  <div className="cart-items-pedidos">
//  <div className="cart-items-pedido">
//    <h2>{name}</h2>
//    <p className=" cart-item-price">{formatCurrency(price, "BRL")}</p>
//  </div>

//  <div className="cart-quantidade">
//    <FiMinus
//      className="FiPlus"
//      size={26}
//      onClick={handleDecreaseQuantityClick}
//      variant="outline"
//    />

//    <h1>{quantidade}</h1>
//    <FiPlus
//      className="FiPlus"
//      size={26}
//      onClick={handleIncreaseQuantityClick}
//      variant="outline"
//    />
//  </div>


// </div>




//           // <CartItem key={cartItem.id} data={cartItem} />
//           // <CartItem key={cartItem.id} data={cartItem} />
//         ))}
//       </div>

//       <div className="subtotal">
//         <h1>SubTotal</h1>
//         <p>{formatCurrency(totalPrice, "BRL")}</p>
//       </div>

//       <div className="subtotal">
//         <h1>Total</h1>
//         <p className="preco">{formatCurrency(totalPrice, "BRL")}</p>
//       </div>
//       {/* </div> */}
//     </>
//   );
// };

// export default Cart;
