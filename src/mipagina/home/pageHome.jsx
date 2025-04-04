import React from "react";
import { Link } from "react-router-dom";
import '../home/style.css';  // Asegúrate de importar el archivo CSS

const PageHome = () => {
  return (
    <div className="page-home">
      {/* Video de fondo */}
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/tMf6aL4OzFc?autoplay=1&mute=1&loop=1&playlist=tMf6aL4OzFc&controls=0&showinfo=0&rel=0"
          title="Minecraft Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Contenido de la página */}
      <div className="page-home-content">
        <h1>Bienvenido al Mundo de Minecraft</h1>
        <p>Explora los bloques, ítems y secretos de Minecraft</p>
        <p>Desde las profundidades de las cuevas hasta las alturas de las montañas</p>
        <Link to="/recetas">
          <button className="explore-button">Explorar Ítems</button>
        </Link>
      </div>
    </div>
  );
};

export default PageHome;