import React from 'react';
import Grid from '@mui/material/Grid2';
import { Paper, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

export default function ContenidoComida({ resultado }) {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Resultados</h2>
      <Grid container spacing={3} justifyContent="center"> {/* Aumentar el spacing */}
        {resultado && resultado.length > 0 ? (
          resultado.map((comida, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}> {/* Fichas más grandes */}
              <Card sx={{ 
                maxWidth: 800,  // Aumentar tamaño
                minHeight: 550, // Evitar que se achique mucho
                borderRadius: "20px", 
                boxShadow: 5,
                padding: 2 // Espaciado interno
              }}>
                <CardMedia
                  component="img"
                  height="250" // Imagen más grande
                  image={comida.strMealThumb}
                  alt={comida.strMeal}
                  sx={{ borderRadius: "10px" }} // Esquinas redondeadas
                />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
                    {comida.strMeal}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ textAlign: "center", marginBottom: "10px" }}>
                    <strong>Categoría:</strong> {comida.strCategory} | <strong>Origen:</strong> {comida.strArea}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: "10px" }}>
                    <strong>Ingredientes:</strong>
                    <ul style={{ paddingLeft: "20px" }}>
                      {Array.from({ length: 20 }).map((_, i) => {
                        const ingrediente = comida[`strIngredient${i + 1}`];
                        const medida = comida[`strMeasure${i + 1}`];
                        return ingrediente ? (
                          <li key={i}>{medida} {ingrediente}</li>
                        ) : null;
                      })}
                    </ul>
                  </Typography>
                  {comida.strYoutube && (
                    <Button
                      variant="contained"
                      color="secondary"
                      href={comida.strYoutube}
                      target="_blank"
                      sx={{ marginTop: "15px", width: "100%", fontSize: "16px" }}
                    >
                      🎥 Ver Receta en YouTube
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Paper sx={{ padding: 2, textAlign: "center", backgroundColor: "#f8d7da", color: "#721c24" }}>
              No se encontraron resultados
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
