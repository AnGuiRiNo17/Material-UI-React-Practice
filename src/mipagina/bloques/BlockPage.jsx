import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function BlockPage() {
  const { id } = useParams();
  const [block, setBlock] = useState(null);

  useEffect(() => {
    // Simulando datos de bloques (deberías reemplazar con tu API real)
    const mockBlocks = [
      { id: 1, name: "stone", displayName: "Bloque de Piedra", type: "block" },
      { id: 2, name: "oak_planks", displayName: "Madera de Roble", type: "block" }
    ];
    
    const selectedBlock = mockBlocks.find(b => b.id === parseInt(id));
    setBlock(selectedBlock);
  }, [id]);

  if (!block) {
    return <Typography>Bloque no encontrado</Typography>;
  }

  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: '0 auto' }}>
      <Button 
        component={Link} 
        to="/bloques" 
        variant="outlined" 
        sx={{ mb: 3 }}
      >
        ← Volver a bloques
      </Button>
      
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={`https://minecraftitemids.com/item/64/${block.name}.png`}
          alt={block.displayName}
          sx={{ objectFit: 'contain', p: 2 }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {block.displayName}
          </Typography>
          <Typography><strong>ID:</strong> {block.id}</Typography>
          <Typography><strong>Tipo:</strong> {block.type}</Typography>
          <Typography><strong>Nombre técnico:</strong> {block.name}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}