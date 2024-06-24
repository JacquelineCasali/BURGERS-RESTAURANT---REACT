
import React from "react";





// filtrando videos por categoria ou titulo
// filtrando videos por categoria ou titulo

// import db from '../../json/db.json'
 const CardList=({array,onDelete}) =>{
 


  return (
    <section className="container">

     
      
          <div className="menu-sections">
        
     
         
           {array.map((array,i) =>(
            
         <div>
   {/* <h1 key={i}>{array.name}</h1> */}
   {/* <img src={array.images[0].image} />  */}
   <button
   style={{cursor:"pointer"}} onClick={() => onDelete(array.id)}>
       <div className="menu-item">
                <div className="menu-item-left">
                  <h2>{array.name}</h2>

                  <p>{array.description}</p>

                  <b>R$:{array.price.toFixed(2)}</b>
                </div>
                <img src={array.images[0].image} />
              </div>
    
    
    </button>
         </div>
       
          ))
        }

        
      </div>

 
 


    </section>
  );
}
export default CardList;