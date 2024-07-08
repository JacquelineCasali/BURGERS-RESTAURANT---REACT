import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina


import Card from "../components/Card/Card";


export default function Home() {

  const handleAddCart=()=>{
    let isPresent = false;
    cartItems.forEach((product)=>{
    if(product.id===burger.id)
      isPresent = true;
   })
   if(isPresent){
    setWarning(true)
  
    // tempo limite 
  setTimeout(()=>{
  setWarning(false)
  },2000)
  return
   }
  
   setCartItems([...cartItems,burger])
   
  
  }
  return (  

   <>
     <HelmetProvider>
        <Helmet title="Cardápio" />
      </HelmetProvider>



 
 <Card />


     
     

 
 
   </>
   
    

  )
}
