import React, { useState } from "react";
import Objectos_Tienda from "../Objectos_Tienda/Objectos_Tienda";
import {Box, FormControl, Select, MenuItem, Button, TextField, Divider, Checkbox, FormControlLabel} from "@mui/material";

import './MainTienda.css';

export default function MainTienda() {
  // Estado para el tipo de tienda seleccionada (books o bicycles)
  const [selectedType, setSelectedType] = useState("");

  const [books, setBooks] = useState([]);
  const [bicycles, setBicycles] = useState([]);

  // Estado para nuevo libro o bicicleta
  const [newBook, setNewBook] = useState({ Category: "", Author: "", Title: "", Isbn: "", Price: "", InStock: false, Sold: false });
  const [newBicycle, setNewBicycle] = useState({ Color: "", Price: "", InStock: false, Sold: false });

  // Manejo del cambio de selección de tienda
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  // Agregar un nuevo libro
  const addBook = () => {
    if (newBook.Title && newBook.Author && newBook.Price) {
      setBooks([...books, { ...newBook, Price: parseFloat(newBook.Price) }]);
      setNewBook({ Category: "", Author: "", Title: "", Isbn: "", Price: "", InStock: false, Sold: false });
    } else {
      alert("Completa todos los campos del libro.");
    }
  };

  // Agregar una nueva bicicleta
  const addBicycle = () => {
    if (newBicycle.Color && newBicycle.Price) {
      setBicycles([...bicycles, { ...newBicycle, Price: parseFloat(newBicycle.Price) }]);
      setNewBicycle({ Color: "", Price: "", InStock: false, Sold: false });
    } else {
      alert("Completa todos los campos de la bicicleta.");
    }
  };

  return (
    <div>
      <h1>Welcome to Store Playa del Carmen</h1>
      <h3>Selected type of store:</h3>

      {/* Selector de tipo de tienda */}
      <Box sx={{ minWidth: 120, marginBottom: 2 }}>
        <FormControl fullWidth>
          <Select value={selectedType} onChange={handleTypeChange}>
            <MenuItem value="books">Books</MenuItem>
            <MenuItem value="bicycles">Bicycles</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Divider />

      {/* Formulario para agregar libros */}
      {selectedType === "books" && (
        <Box sx={{ mt: 2 }}>
          <h3>Add a New Book</h3>
          <TextField label="Category" value={newBook.Category} onChange={(e) => setNewBook({ ...newBook, Category: e.target.value })} sx={{ mr: 1 }} />
          <TextField label="Title" value={newBook.Title} onChange={(e) => setNewBook({ ...newBook, Title: e.target.value })} sx={{ mr: 1 }} />
          <TextField label="Author" value={newBook.Author} onChange={(e) => setNewBook({ ...newBook, Author: e.target.value })} sx={{ mr: 1 }} />
          <TextField label="ISBN" value={newBook.Isbn} onChange={(e) => setNewBook({ ...newBook, Isbn: e.target.value })} sx={{ mr: 1 }} />
          <TextField label="Price" type="number" value={newBook.Price} onChange={(e) => setNewBook({ ...newBook, Price: e.target.value })} sx={{ mr: 1 }} />
          
          <FormControlLabel
            control={<Checkbox checked={newBook.InStock} onChange={(e) => setNewBook({ ...newBook, InStock: e.target.checked })} />}
            label="In Stock"
          />
          <FormControlLabel
            control={<Checkbox checked={newBook.Sold} onChange={(e) => setNewBook({ ...newBook, Sold: e.target.checked })} />}
            label="Sold"
          />

          <Button onClick={addBook} variant="contained" color="primary" sx={{ ml: 2 }}>Add Book</Button>
        </Box>
      )}

      {/* Formulario para agregar bicicletas */}
      {selectedType === "bicycles" && (
        <Box sx={{ mt: 2 }}>
          <h3>Add a New Bicycle</h3>
          <TextField label="Color" value={newBicycle.Color} onChange={(e) => setNewBicycle({ ...newBicycle, Color: e.target.value })} sx={{ mr: 1 }} />
          <TextField label="Price" type="number" value={newBicycle.Price} onChange={(e) => setNewBicycle({ ...newBicycle, Price: e.target.value })} sx={{ mr: 1 }} />
          
          <FormControlLabel
            control={<Checkbox checked={newBicycle.InStock} onChange={(e) => setNewBicycle({ ...newBicycle, InStock: e.target.checked })} />}
            label="In Stock"
          />
          <FormControlLabel
            control={<Checkbox checked={newBicycle.Sold} onChange={(e) => setNewBicycle({ ...newBicycle, Sold: e.target.checked })} />}
            label="Sold"
          />

          <Button onClick={addBicycle} variant="contained" color="primary" sx={{ ml: 2 }}>Add Bicycle</Button>
        </Box>
      )}

      <Divider sx={{ my: 2 }} />

      {/* Componente que muestra la tabla de productos */}
      <Objectos_Tienda 
      TypeStore={selectedType} 
      books={books} 
      bicycles={bicycles} />
    </div>
  );
}
