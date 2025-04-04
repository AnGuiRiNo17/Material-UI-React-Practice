import React, { useState, useEffect } from "react";
import { Paper, InputBase, IconButton, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import ContenidoComida from "./ContenidoComida";

export default function HomePage() {
  const [textoBuscar, setTextoBuscar] = useState("");
  const [data, setData] = useState([]); // Datos combinados de ítems, mobs y alimentos

  // Función para buscar ítems, mobs y alimentos por nombre
  const obtenerDatosPorNombre = async () => {
    const buscar = textoBuscar.trim();

    if (buscar === "") {
      alert("Campo vacío, pon algo mínimo");
    } else {
      try {
        // Obtener los datos de items.json
        const itemsResponse = await fetch(
          "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.16.1/items.json"
        );
        const items = await itemsResponse.json();

        // Obtener los datos de mobs (entities.json)
        const mobsResponse = await fetch(
          "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.16.1/entities.json"
        );
        const mobs = await mobsResponse.json();

        // Obtener los datos de alimentos (foods.json)
        const foodsResponse = await fetch(
          "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.16.1/foods.json"
        );
        const foods = await foodsResponse.json();

        // Combinar todos los datos en una sola lista
        const combinedData = [...items, ...mobs, ...foods];

        // Filtrar los ítems que coincidan con el texto de búsqueda
        const resultados = combinedData.filter((item) =>
          item.displayName.toLowerCase().includes(buscar.toLowerCase())
        );

        setData(resultados);
        console.log("Resultados de la API:", resultados);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
  };

  // Cargar datos iniciales (opcional)
  useEffect(() => {
    const obtenerDataInicial = async () => {
      try {
        // Obtener los datos de items.json
        const itemsResponse = await fetch(
          "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.16.1/items.json"
        );
        const items = await itemsResponse.json();

        // Obtener los datos de mobs (entities.json)
        const mobsResponse = await fetch(
          "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.16.1/entities.json"
        );
        const mobs = await mobsResponse.json();

        // Obtener los datos de alimentos (foods.json)
        const foodsResponse = await fetch(
          "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.16.1/foods.json"
        );
        const foods = await foodsResponse.json();

        // Combinar todos los datos en una sola lista
        const combinedData = [...items, ...mobs, ...foods];

        // Mostrar los primeros 10 ítems por defecto
        setData(combinedData.slice(0, 10));
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    obtenerDataInicial();
  }, []);

  // Manejar la tecla "Enter" para buscar
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      obtenerDatosPorNombre();
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "Green" }}>
        Encuentra Ítems, Mobs y Alimentos de Minecraft
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
                placeholder="Buscar ítem, mob o alimento..."
                value={textoBuscar}
                onChange={(e) => setTextoBuscar(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <IconButton
                onClick={obtenerDatosPorNombre}
                sx={{ p: "12px" }}
                color="primary"
              >
                <SearchIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Paper>
          </Card>
        </Grid>
      </Grid>

      {/* Mostrar mensaje si no hay resultados */}
      {data.length === 0 && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <p style={{ fontSize: "20px", color: "#ff0000" }}>
            No se encontraron resultados.
          </p>
        </div>
      )}

      {/* Pasar los datos al componente ContenidoComida */}
      <ContenidoComida data={data} />
    </div>
  );
}