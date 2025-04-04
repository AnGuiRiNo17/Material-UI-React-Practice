import React from 'react'
import { Typography, Box, Grid, Card, CardContent, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const bloquesEjemplo = [
  { id: 1, nombre: 'Piedra', tipo: 'sólido' },
  { id: 2, nombre: 'Madera', tipo: 'orgánico' },
  { id: 3, nombre: 'Hierro', tipo: 'mineral' }
]

export default function ListaBloques() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Catálogo de Bloques
      </Typography>
      <Grid container spacing={3}>
        {bloquesEjemplo.map((bloque) => (
          <Grid item xs={12} sm={6} md={4} key={bloque.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5">{bloque.nombre}</Typography>
                <Typography sx={{ mb: 2 }}>Tipo: {bloque.tipo}</Typography>
                <Button 
                  component={Link} 
                  to={`/bloques/${bloque.id}`}
                  variant="contained"
                  fullWidth
                >
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}