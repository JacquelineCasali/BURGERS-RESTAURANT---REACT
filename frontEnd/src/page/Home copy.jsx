// import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
// import Banner from "../components/Banner/Banner";
// import ProductsList from "../components/ProductsList/ProductsList";
// import { useEffect, useState } from "react";
// import db from '../../db.json'
// import CardList from "../components/ProductsList/CardList";


// export default function Home() {
//   const [products,setProducts]=useState([])
//   useEffect(()=>{
//     fetch('../../db.json').then(res=>res.json())
//     .then((data)=>setProducts(data.products))
  
//   },[])
//     const [sections,setSections]=useState([])
//   useEffect(()=>{
//     fetch('../../db1.json').then(res=>res.json())
//     .then((data)=>setSections(data.sections))
  
//   },[])
//   return (
  

//    <>
//      <HelmetProvider>
//         <Helmet title="Cardápio" />
//       </HelmetProvider>
   
// <Banner/>

// <ProductsList products={products}/>
// <CardList sections={sections} />
//    </>
   
    

//   )
// }
