import "./Menu.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import db from '../../data/db.json'



export default function Menu() {


  return (
 
     

     
    <section className="menu-pedido" >
   
   <a href="#burgers">
   <div className="menus" key="index">
      <img className="menu-image" 
      
      src={db.sections[0].images[0].image.replace(/\w\.jpg/gi, 'W.jpg')} alt="Foto" />
      <p className="text">{db.sections[0].name}</p>
      </div>
   
   </a>
    
    {/* <div className='container'> */}
    <a href="#drinks">
    <div className="menus" >
 <img className="menu-image" 
   src={db.sections[1].images[0].image.replace(/\w\.jpg/gi, 'W.jpg')} alt="Foto" />

  <p className="text">{db.sections[1].name}</p>
  </div>
  </a>
  <a href="#desserts">
  <div className="menus" >
  <img className="menu-image"  

  src={db.sections[2].images[0].image.replace(/\w\.jpg/gi, 'W.jpg')} alt="Foto"/>
  <p className="text">{db.sections[2].name}</p>
  </div>
  </a>
 
</section>

    
      
   

    

  );
}
