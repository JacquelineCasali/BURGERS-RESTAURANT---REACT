import React, { useState } from "react";
import styles from "./Hearder.module.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import CartButton from "../CartButton/CartButton";

function Hearder(onSair) {
    //mostrar ou nao menu
    const [menu, setMenu] = useState(false);
    // //  mudança de menu
    const click = () => {
      setMenu(!menu);
    };
  return (
    
    <header className={styles.header}>

 <Link  className={styles.b}to={`/`}>MENU</Link>
           {/* <Link  className={styles.b} to="/">MENU</Link> */}
      <nav className={`${styles.menuSandwich} ${menu ? styles.show : ""} `} onClick={click} >
   

          <Link className={styles.a} to={`/login`}>
          LOGIN</Link>
          <Link className={styles.a} to={`/contato`}>
          CONTADO</Link>
      </nav>
      <CartButton />
     {/* botao responsivo */}
   
     <div className={styles.hamburger} onClick={click}>
     
     <FaBars size={20} style={{ color: "#ffffff"}} />
   
   </div>

    </header>

    
  );
}

export default Hearder;
