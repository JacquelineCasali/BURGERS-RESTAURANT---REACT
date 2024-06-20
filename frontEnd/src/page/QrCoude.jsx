import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina

import QRCodeGenerator from "../components/QRCode";


export default function QrCoude() {
 
  return (
  

   <>
     <HelmetProvider>
        <Helmet title="Detalhe Cardapio" />
      </HelmetProvider>
   

<QRCodeGenerator/>
   </>
   
    

  )
}
