import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import Card from "../components/Card/Card";
import Banner from "../components/Banner/Banner";
import Menu from "../components/Menu/Menu";



export default function Home() {
 
  return (
  

   <>
     <HelmetProvider>
        <Helmet title="Cardápio" />
      </HelmetProvider>
   
<Banner/>

<Card/>

   </>
   
    

  )
}
