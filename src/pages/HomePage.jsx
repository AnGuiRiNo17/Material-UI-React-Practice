import React from 'react';
import Grid from '@mui/material/Grid2';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContenidoComida from './ContenidoComida';

export default function HomePage() {
  const [textoBuscar, setTextoBuscar] = React.useState('');
  const [resultadoComida, setResultadoComida] = React.useState([]);

  const obtenercomidadpornombre = () => {
    if (textoBuscar === "") {
      alert("Campos vacíos. Pon algo");
    } else {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textoBuscar}`;

      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log("Resultados de la API:", result);
          setResultadoComida(result.meals || []);
        })
        .catch(error => console.error("Error al obtener los datos:", error));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Evita que se envíe el formulario si está dentro de uno
      obtenercomidadpornombre();
    }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center', color: "Green" }}>Encuentra tu Platillo Favorito 🍟🍕</h1>
      <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: '20px', display: 'flex' }} spacing={2}>
        <Grid xs={12} md={12} display="flex" justifyContent="center"> 
          <Paper
            component="form"
            onSubmit={(e) => e.preventDefault()} // Evita el comportamiento por defecto del formulario
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px', 
              borderRadius: '30px',
              boxShadow: 3,
              width: '90vw', 
              maxWidth: '1200px',
            }}
          >
            <InputBase
              sx={{ ml: 2, flex: 1, fontSize: '18px' }}
              placeholder="Buscar comida..."
              value={textoBuscar}
              onChange={e => setTextoBuscar(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <IconButton
              onClick={obtenercomidadpornombre}
              sx={{ p: '12px' }}
              color="primary"
            >
              <SearchIcon sx={{ fontSize: '30px' }} />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      
      <ContenidoComida resultado={resultadoComida} />
    </>
  );
}
