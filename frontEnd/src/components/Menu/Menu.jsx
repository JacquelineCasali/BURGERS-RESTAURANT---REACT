import "./Menu.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";



export default function Menu() {



  const [data , setData]=useState(null)
  const url ='https://cdn-dev.preoday.com/challenge/menu'
  // rota de leitura 
  useEffect (()=>{
  axios.get(url)
  .then((response)=>{
      setData(response.data)
  //console.log(data)
  }).catch((error)=>{
      console.log(error)})
  },[])
  if(!data) return null





  return (
    // <section className="container">

     

     
    <section className="menu-pedido" >
   
   {/* <a href="#burgers"> */}
   <div className="menus" key="index">
      <img className="menu-image" 
      
      src={data.sections[0].images[0].image} alt="Foto" />
      <p className="text">{data.sections[0].name}</p>
      </div>
   
   {/* </a> */}
    
    {/* <div className='container'> */}
    {/* <a href="#drinks"> */}
    <div className="menus" >
 <img className="menu-image" 
   src={data.sections[1].images[0].image} alt="Foto" />

  <p className="text">{data.sections[1].name}</p>
  </div>
  {/* </a> */}
  <a href="#desserts">
  <div className="menus" >
  <img className="menu-image"  

  src={data.sections[2].images[0].image} alt="Foto"/>
  <p className="text">{data.sections[2].name}</p>
  </div>
  </a>
 

</section>

    
      
   

    

  );
}
