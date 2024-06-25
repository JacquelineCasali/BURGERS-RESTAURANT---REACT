import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../page/Home";
import Cadastro from "../components/Cadastro/Cadastro";
import Footer from "../components/Footer/Footer";
import Hearder from "../components/Hearder/Hearder";
import Container from "../components/Container/Container";
import Error from "../page/Error/Error";

import Editar from "../components/Editar/Editar";
import Provider from "../context/Provider";


const AppRoutes = () => {
  return (
    <Router>
  <Provider>
     <Hearder/>
   <Container>
    <Routes>
      <Route path="/" element={<Home />} />
   
       <Route exact path="/cadastro" element={<Cadastro />} />
       <Route exact path="/edit/:id" element={<Editar />} />

   
     <Route path="*" element={<Error />} />
    </Routes>
    </Container>
    <Footer/>
    </Provider>
  </Router>
  );
};
export default AppRoutes;
