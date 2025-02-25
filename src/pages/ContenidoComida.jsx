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

export default function ContenidoComida({ data }) {
  console.log("Datos desde padre:", data);

  return (
    <div>
      {!data || data.length === 0 ? (
        <Grid item xs={12}>
          <Paper
            sx={{ 
              padding: 2, 
              textAlign: "center", 
              backgroundColor: "#f8d7da", 
              color: "#721c24" 
            }}
          >
            No se encontraron resultados
          </Paper>
        </Grid>
      ) : (
        <Grid container padding={4} spacing={3} justifyContent="center">
          {data.map((recetadata, index) => (
              <Grid key={index} size={{ xs: 6, md: 4 }}>
              <Paper sx={{ padding: 2, borderRadius: "10px" }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={recetadata.strMealThumb}
                  alt={recetadata.strMeal}
                  sx={{ borderRadius: "10px" }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    {recetadata.strMeal}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ textAlign: "center", marginBottom: "10px" }}
                  >
                    <strong>Categoría:</strong> {recetadata.strCategory} |{" "}
                    <strong>Origen:</strong> {recetadata.strArea}
                  </Typography>

                  {/* Acordeón para Ingredientes */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography component="span">
                        <strong>Ingredientes</strong>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul style={{ paddingLeft: "20px" }}>
                        {Array.from({ length: 20 }).map((_, i) => {
                          const ingrediente =
                            recetadata[`strIngredient${i + 1}`];
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

                  {/* Acordeón para Instrucciones */}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography component="span">
                        <strong>Cómo preparar</strong>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        variant="body2"
                        sx={{ textAlign: "justify", whiteSpace: "pre-line" }}
                      >
                        {recetadata.strInstructions}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {recetadata.strYoutube && (
                    <Button
                      variant="contained"
                      color="secondary"
                      href={recetadata.strYoutube}
                      target="_blank"
                      sx={{ marginTop: "15px", width: "100%", fontSize: "16px" }}
                    >
                      📽️ Ver Receta en YouTube
                    </Button>
                  )}
                </CardContent>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
