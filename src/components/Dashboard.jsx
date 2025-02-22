import * as React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline, Box } from '@mui/material';

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Barra de navegación superior */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Menú lateral */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Reportes" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Configuración" />
          </ListItem>
        </List>
      </Drawer>

      {/* Contenido principal */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4">Bienvenido al Dashboard</Typography>
        <Typography variant="body1">Aquí puedes gestionar información importante.</Typography>
      </Box>
    </Box>
  );
}
