import React from "react";
import { Link } from "react-router-dom";
import '../home/style.css';  // Asegúrate de importar el archivo CSS

const PageHome = () => {
  return (
    <div className="page-home">
      <div className="page-home-content">
        <h1>Bienvenido a Recetas Mundiales</h1>
        <p>Descubre las mejores recetas de cada país</p>
        <p>Desde los barrios mexicanos hasta la elegancia de Francia</p>
        <Link to="/recetas">
          <button>Conocer más</button>
        </Link>
      </div>
    </div>
  );
};

export default PageHome;
