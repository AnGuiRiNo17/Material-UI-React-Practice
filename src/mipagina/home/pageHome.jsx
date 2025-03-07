import React from "react";
import { Link } from "react-router-dom";
import '../home/style.css';  // Asegúrate de importar el archivo CSS

const PageHome = () => {
  return (
    <div className="page-home">
      <div className="page-home-content">
        <h1>Bienvenido a Recetas Mundiales</h1>
        <p>Encuentra las mejores recetas de cada pais</p>
        <p>Desde los barrios mexicanos, hasta la elegancia de francia</p>
        <Link to="/recetas">
          <button>Conocer más</button>
        </Link>
      </div>
    </div>
  );
};

export default PageHome;
