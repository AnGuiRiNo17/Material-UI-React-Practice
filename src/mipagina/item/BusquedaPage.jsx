import React, { useState, useEffect } from "react";
import {
  Paper,
  InputBase,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  Box
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function BusquedaPage() {
  const [textoBuscar, setTextoBuscar] = useState("");
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { value: "", label: "Todos" },
    { value: "block", label: "Bloques" },
    { value: "item", label: "Ítems" },
    { value: "food", label: "Alimentos" },
  ];

  const obtenerItemsPorNombre = async () => {
    const buscar = textoBuscar.trim();
    if (buscar === "") {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.16.1/items.json"
      );
      const items = await response.json();

      let resultados = items.filter((item) =>
        item.displayName.toLowerCase().includes(buscar.toLowerCase())
      );

      if (selectedCategory) {
        resultados = resultados.filter((item) => item.type === selectedCategory);
      }

      setData(resultados);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const obtenerDataInicial = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.16.1/items.json"
        );
        const items = await response.json();
        setData(items.slice(0, 12));
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    obtenerDataInicial();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      obtenerItemsPorNombre();
    }
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const getItemRoute = (item) => {
    return item.type === 'block' ? `/bloques/${item.id}` : `/items/${item.id}`;
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" component="h1" sx={{ 
        textAlign: "center", 
        color: "primary.main",
        mb: 4,
        fontWeight: 'bold'
      }}>
        Buscador de Minecraft
      </Typography>

      {/* Barra de búsqueda */}
      <Grid container justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <Paper
            component="form"
            onSubmit={(e) => e.preventDefault()}
            sx={{
              display: "flex",
              alignItems: "center",
              p: '2px 4px',
              borderRadius: 2,
              boxShadow: 3,
              width: '100%'
            }}
          >
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Buscar bloques, ítems o alimentos..."
              value={textoBuscar}
              onChange={(e) => setTextoBuscar(e.target.value)}
              onKeyDown={handleKeyPress}
              fullWidth
            />
            <IconButton
              onClick={obtenerItemsPorNombre}
              color="primary"
              disabled={isLoading}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>

      {/* Filtros */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          sx={{ minWidth: 200, bgcolor: 'background.paper' }}
          size="small"
        >
          {categories.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Resultados */}
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <Typography>Cargando...</Typography>
        </Box>
      ) : data.length === 0 ? (
        <Box sx={{ textAlign: 'center', p: 4 }}>
          <Typography variant="h6" color="textSecondary">
            {textoBuscar ? 'No se encontraron resultados' : 'Realiza una búsqueda para comenzar'}
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={`https://minecraftitemids.com/item/64/${item.name}.png`}
                  alt={item.displayName}
                  sx={{ 
                    objectFit: 'contain',
                    p: 2,
                    bgcolor: 'background.default'
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div" noWrap>
                    {item.displayName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: {item.id} | Tipo: {item.type}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, display: 'flex', gap: 1 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handleOpenModal(item)}
                    fullWidth
                  >
                    Detalles
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    component={Link}
                    to={getItemRoute(item)}
                    fullWidth
                  >
                    Ver Página
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Modal de detalles */}
      <Dialog 
        open={openModal} 
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ 
          bgcolor: 'primary.main', 
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {selectedItem?.displayName}
          <Button 
            onClick={handleCloseModal} 
            color="inherit"
            size="small"
          >
            ✕
          </Button>
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 3 }}>
          {selectedItem && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <CardMedia
                  component="img"
                  image={`https://minecraftitemids.com/item/64/${selectedItem.name}.png`}
                  alt={selectedItem.displayName}
                  sx={{ 
                    width: '100%',
                    objectFit: 'contain',
                    bgcolor: 'background.default',
                    p: 2,
                    borderRadius: 1
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="body1" paragraph>
                  <strong>ID:</strong> {selectedItem.id}
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Tipo:</strong> {selectedItem.type}
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Nombre técnico:</strong> {selectedItem.name}
                </Typography>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button 
            component={Link} 
            to={selectedItem ? getItemRoute(selectedItem) : '#'}
            variant="contained"
            color="primary"
          >
            Ver página completa
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}