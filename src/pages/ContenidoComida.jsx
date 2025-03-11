import {
  Paper,
  Typography,
  CardMedia,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

export default function ContenidoComida({ data }) {
  console.log("Datos desde padre:", data);

  return (
    <div>
      {/* Si no hay datos, muestra un mensaje indicando que no se encontraron resultados */}
      {!data || data.length === 0 ? (
        <Grid container padding={4} size={{ xs: 6, md: 4 }} spacing={3} justifyContent="center">
          <Paper
            sx={{
              p: 1,
              textAlign: "center",
              backgroundColor: "#fdecea",
              color: "#b71c1c",
              borderRadius: 1,
              boxShadow: "none",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "30px" }}>
              No se encontraron resultados
            </Typography>
          </Paper>
        </Grid>
      ) : (
        // Si hay datos, se mapea cada receta y se muestra en una tarjeta
        <Grid container padding={4} spacing={3} justifyContent="center">
          {data.map((recetadata, index) => (
            <Grid key={index} size={{ xs: 6, md: 4 }}>
              <Paper sx={{ padding: 2, borderRadius: "10px" }}>
                {/* Imagen representativa de la receta */}
                <CardMedia
                  component="img"
                  height="250"
                  image={recetadata.strMealThumb}
                  alt={recetadata.strMeal}
                  sx={{ borderRadius: "10px" }}
                />
                <CardContent>
                  {/* Nombre de la receta */}
                  <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", fontSize: "30px" }}>
                    {recetadata.strMeal}
                  </Typography>

                  {/* Categoría y Origen de la receta */}
                  <Typography variant="body1" color="textSecondary" sx={{ textAlign: "center", marginBottom: "10px", fontSize: "20px" }}>
                    <strong>Categoría:</strong> {recetadata.strCategory} |{" "}
                    <strong>Origen:</strong> {recetadata.strArea}
                  </Typography>

                  {/* Identificador único de la receta */}
                  <Typography variant="body1" color="textSecondary" sx={{ textAlign: "center", marginBottom: "10px", fontSize: "20px" }}>
                    <strong>Id_Comida:</strong> {recetadata.idMeal}
                  </Typography>

                  {/* Acordeón para mostrar la lista de ingredientes */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography component="span" sx={{ fontSize: "20px" }}>
                        <strong>Ingredientes</strong>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul style={{ paddingLeft: "20px", fontSize: "16px" }}>
                        {Array.from({ length: 20 }).map((_, i) => {
                          const ingrediente = recetadata[`strIngredient${i + 1}`];
                          const medida = recetadata[`strMeasure${i + 1}`];
                          return ingrediente ? (
                            <li key={i}>
                              {medida} {ingrediente}
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  {/* Acordeón para mostrar las instrucciones de preparación */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography component="span" sx={{ fontSize: "20px" }}>
                        <strong>Cómo preparar</strong>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" sx={{ textAlign: "justify", whiteSpace: "pre-line", fontSize: "16px" }}>
                        {recetadata.strInstructions}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Botón para abrir la receta en YouTube (si existe el enlace) */}
                  {recetadata.strYoutube && (
                    <Button
                      variant="contained"
                      color="secondary"
                      href={recetadata.strYoutube}
                      target="_blank"
                      sx={{ marginTop: "15px", width: "100%", fontSize: "20px" }}
                    >
                      📽️ Ver Receta en YouTube
                    </Button>
                  )}

                  {/* Botón "Ver más" que redirige a la página de detalles de la receta */}
                  <Button
                    variant="contained"
                    color="primary"
                    LinkComponent={Link}
                    to={`/recetas/${recetadata.idMeal}`}
                    sx={{ marginTop: "15px", width: "100%", fontSize: "20px" }}
                  >
                    Ver más
                  </Button>
                </CardContent>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
