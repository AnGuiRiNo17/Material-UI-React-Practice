import React from "react";
import { Container, Typography, Grid, Avatar, IconButton, Link, Box, Divider } from "@mui/material";
import { Email, GitHub } from "@mui/icons-material";
import "./PageAbout.css";

export default function PageAbout() {
  return (
    <Box className="background">
      <Container maxWidth="md" className="portfolio-container">
        {/* Sección de perfil */}
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={4} className="profile-container">
            <Avatar
              src="https://avatars.githubusercontent.com/u/181233097?s=400&u=2e66c8587a2a8e6ac5e1d3f2624bf97f5d740b80&v=4"
              alt="Ángel Rivera"
              sx={{
                width: 120,
                height: 120,
                boxShadow: 5,
        
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" className="title">
              👋 Hola, soy @AnGuiRiNo17
            </Typography>
            <Typography variant="subtitle1" className="subtitle">
              También conocido como Ángel Rivera.
            </Typography>
            <Typography className="description">
              Apasionado por la tecnología, los proyectos creativos y el aprendizaje continuo. Estudiante con
              intereses en la informática y en el desarrollo de aplicaciones. Me encanta descubrir nuevas
              herramientas y técnicas para mejorar mi trabajo y compartirlo con la comunidad.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Sección de educación */}
        <Typography variant="h5" className="skills-title" gutterBottom>
          Educación
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Sección de Educación */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="section-subtitle" gutterBottom>
              Educación
            </Typography>
            <Typography variant="body1" className="description">
              <strong>Estudios:</strong> Actualmente en formación y desarrollando nuevas habilidades en el área
              de tecnología y diseño de interfaces.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Sección de contacto */}
        <Typography variant="h5" className="contact-title" gutterBottom>
          Contáctame
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <IconButton href="mailto:angelrivera1707@gmail.com" color="primary">
              <Email fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://github.com/AnGuiRiNo17" target="_blank" color="inherit">
              <GitHub fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
