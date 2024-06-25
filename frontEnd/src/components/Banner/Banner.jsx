import React, { useEffect, useState } from "react";
import "../Banner/Banner.css"
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Endereco from "../../data/Endereco.json"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Banner() {
//erro cors
  // const [data , setData]=useState(null)
  // const url ='https://cdn-dev.preoday.com/challenge/venue/9'
  // // rota de leitura 
  // useEffect (()=>{
  // axios.get(url)
  // .then((response)=>{
  //     setData(response.data)
  // console.log(data)
  // }).catch((error)=>{
  //     console.log(error)})
  // },[])
  // if(!data) return null
  
  

 
  return (

    <section className="section">
         {/* <div className='container'> */}
       
      <img className="banner" src={Endereco[0].webSettings.bannerImage.replace(/\w\.jpg/gi, 'W.jpg')} alt="Foto" />
      
      {/* </div> */}
    </section>
  );
}
