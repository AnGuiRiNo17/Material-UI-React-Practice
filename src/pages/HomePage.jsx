import React, { useState, useEffect } from "react";
import { Paper, InputBase, IconButton, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import ContenidoComida from "./ContenidoComida";

export default function HomePage() {
  const [textoBuscar, setTextoBuscar] = useState("");
  const [data, setData] = useState({ meals: [] });

  console.log("Contenido input", textoBuscar);

  const obtenerComidaPorNombre = async () => {
    const buscar = textoBuscar.trim();

    if (buscar === "") {
      alert("Campo vacío, pon algo mínimo");
    } else {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${buscar}`,
          requestOptions
        );
        const result = await response.json();
        setData(result);
        console.log("Resultados de la API:", result);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
  };

  useEffect(() => {
    const obtenerData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=beef"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    obtenerData();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      obtenerComidaPorNombre();
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "Green" }}>
        Encuentra tu Platillo Favorito
      </h1>
      <Grid
        container
        padding={4}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid xs={12} md={8} lg={6} display="flex" justifyContent="center">
          <Card sx={{ padding: 2, borderRadius: "20px", boxShadow: "none" }}>
            <Paper
              component="form"
              onSubmit={(e) => e.preventDefault()}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                borderRadius: "30px",
                boxShadow: 3,
                width: "90vw",
                maxWidth: "800px",
              }}
            >
              <InputBase
                sx={{ ml: 2, flex: 1, fontSize: "18px" }}
                placeholder="Buscar comida..."
                value={textoBuscar}
                onChange={(e) => setTextoBuscar(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <IconButton
                onClick={obtenerComidaPorNombre}
                sx={{ p: "12px" }}
                color="primary"
              >
                <SearchIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Paper>
          </Card>
        </Grid>
      </Grid>

      <ContenidoComida data={data.meals} />
    </div>
  );
}
