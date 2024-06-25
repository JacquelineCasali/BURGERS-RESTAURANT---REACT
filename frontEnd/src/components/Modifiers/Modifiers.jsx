import React, { useContext } from 'react'
import formatCurrency from '../../utils/formatCurrency'
import AppContext from '../../context/‎AppContext';

export default function Modifiers() {
    const { 

        modifiers
         } =useContext(AppContext);
    return (
   <>
       <div className="opcao">
            <h2>{modifiers.name}</h2>
            <p >Select 1 option</p>
          </div>

          {modifiers.items.map((detalhe, index) => (
            <div className="opcao-items">
              <div className="opcao-items-left" key={index}>
                <b>{detalhe.name}</b>
                <p>{formatCurrency(detalhe.price, 'BRL')}</p>
               
              </div>
              <input type="radio" />
            </div>
               ))}
</>
  )
}
