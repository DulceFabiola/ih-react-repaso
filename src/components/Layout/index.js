import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <Header />
      {/* EL OUTLET SON TODOS LOS COMPONENTES HIJOS (CHILDREN) DE LA ROUTA PADRE, DEPENDIENDO DEL PATH */}
      {/* SI ESTOY EN http://localhost:3000/crud, ENTONCES OUTLET VA A SER <CRUD /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
