import React, { useEffect, useState } from "react";
import "../Footer/Footer.css"
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Endereco from "../../json/Endereco.json"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Footer() {

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

    <footer className="footer">
         {/* <div className='container'> */}
       
        <h1 className="h1">{Endereco[0].name}</h1>
 
        <div className='col'>
                       <span className='bar'>Endereço: {Endereco[0].address1}</span>
                       <span className='bar'>Cidade: {Endereco[0].city} ,  {Endereco[0].timeZone} / {Endereco[0].county}</span>
                      
                       <span className='bar'>Cep: {Endereco[0].postcode}</span>
                      
           
               
           
        </div>

       

       
           
        <div className='col-2'>

                <Link to="https://www.facebook.com/"><FaFacebook  size={30}/></Link>
                <Link href="https://instagram.com/">
                    <FaInstagram  size={30}/>
                </Link>
                </div>
               
       
       


      {/* </div> */}
    </footer>
  );
}
