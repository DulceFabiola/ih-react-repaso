//1.IMPORTACIONES
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CRUD from "./components/CRUD";
import Home from "./components/Home";
import Layout from "./components/Layout";

//2.FUNCION
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* index es usar el path de la ruta padre
          Voy a ocupar el path de mi papá xD
           */}
            <Route index element={<Home />} />
            {/* /crud o crud sin slach, funciona sin tema
          path es el camino a seguir
           */}
            <Route path="/crud" element={<CRUD />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

//3.EXPORTACION
export default Router;
