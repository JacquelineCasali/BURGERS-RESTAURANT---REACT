import "./Menu.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import db from '../../data/db.json'



export default function Menu() {


 

  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://cdn-dev.preoday.com/challenge/menu',
  //       {
  //         // method: "GET",
  //         headers: {
  //           // "Content-Type": "application/json",
  //          " Access-Control-Allow-Origin":" *"
  //         }
  //       }
  //     );
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //     // setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);
  return (
    // <section className="container">

     

     
    <section className="menu-pedido" >
   
   <a href="#burgers">
   <div className="menus" key="index">
      <img className="menu-image" 
      
      src={db.sections[0].images[0].image} alt="Foto" />
      <p className="text">{db.sections[0].name}</p>
      </div>
   
   </a>
    
    {/* <div className='container'> */}
    <a href="#drinks">
    <div className="menus" >
 <img className="menu-image" 
   src={db.sections[1].images[0].image} alt="Foto" />

  <p className="text">{db.sections[1].name}</p>
  </div>
  </a>
  <a href="#desserts">
  <div className="menus" >
  <img className="menu-image"  

  src={db.sections[2].images[0].image} alt="Foto"/>
  <p className="text">{db.sections[2].name}</p>
  </div>
  </a>
 
</section>

    
      
   

    

  );
}
