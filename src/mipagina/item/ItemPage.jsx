import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.16.1/items.json"
        );
        const items = await response.json();
        const selectedItem = items.find(item => item.id === parseInt(id));
        setItem(selectedItem);
      } catch (error) {
        console.error("Error al obtener los detalles del ítem:", error);
      }
    };

    fetchItemDetails();
  }, [id]);

  if (!item) {
    return <Typography>Cargando...</Typography>;
  }

  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: '0 auto' }}>
      <Button 
        component={Link} 
        to="/recetas" 
        variant="outlined" 
        sx={{ mb: 3 }}
      >
        ← Volver a búsqueda
      </Button>
      
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={`https://minecraftitemids.com/item/64/${item.name}.png`}
          alt={item.displayName}
          sx={{ objectFit: 'contain', p: 2 }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {item.displayName}
          </Typography>
          <Typography><strong>ID:</strong> {item.id}</Typography>
          <Typography><strong>Tipo:</strong> {item.type}</Typography>
          <Typography><strong>Nombre técnico:</strong> {item.name}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}