import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import ListaProductoDiAlgo from './ListaProductoDiAlgo'

export default function ListaVerduras() {

   const data = {
         "store": {
             "book": [
                 {
                     "category": "reference",
                     "author": "Nigel Rees",
                     "title": "Sayings of the Century",
                     "price": 8.95,
                     "in-stock": true,
                     "sold": true
                 },
                 {
                     "category": "fiction",
                     "author": "Evelyn Waugh",
                     "title": "Sword of Honour",
                     "price": 12.99,
                     "in-stock": false,
                     "sold": true
                 },
                 {
                     "category": "fiction",
                     "author": "Herman Melville",
                     "title": "Moby Dick",
                     "isbn": "0-553-21311-3",
                     "price": 8.99,
                     "in-stock": true,
                     "sold": false
                 },
                 {
                     "category": "fiction",
                     "author": "J. R. R. Tolkien",
                     "title": "The Lord of the Rings",
                     "isbn": "0-395-19395-8",
                     "price": 22.99,
                     "instock": false,
                     "sold": false
                 }
             ],
             "bicycle": {
                 "color": "red",
                 "price": 19.95,
                 "instock": true,
                 "sold": false
             }
         }
     }

   const verduras = [
      { id: '1', nombre: 'Lechuga', descripcion: 'Verdura 100% mexicana...', precio: 23, cantidad: 12 },
      { id: '2', nombre: 'Tomate', descripcion: 'Verdura 100% mexicana...', precio: 25, cantidad: 17 },
      { id: '3', nombre: 'Papa', descripcion: 'Verdura 100% mexicana...', precio: 17, cantidad: 8 },
      { id: '4', nombre: 'Zanahoria', descripcion: 'Verdura 100% mexicana...', precio: 22, cantidad: 4 },
      { id: '5', nombre: 'Cebolla', descripcion: 'Verdura 100% mexicana...', precio: 30, cantidad: 10 },
      { id: '6', nombre: 'Espinaca', descripcion: 'Verdura 100% mexicana...', precio: 36, cantidad: 3 },
   ]

   // Estado para la verdura seleccionada
   const [verduraSeleccionada, setVerduraSeleccionada] = useState('')

   const handleChange = (event) => {
      setVerduraSeleccionada(event.target.value)
   }

   return (
      <div>
         <h2>Tabla de Verduras</h2>

         <table border="1">
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Acción</th>
               </tr>
            </thead>
            <tbody>
               {verduras.map((data) => (
                  <tr key={data.id}>
                     <td>{data.id}</td>
                     <td>{data.nombre}</td>
                     <td>{data.descripcion}</td>
                     <td>${data.precio}</td>
                     <td>
                        <Button
                           onClick={() => alert(`Stock disponible: ${data.cantidad}`)}
                           variant="contained"
                           color="primary"
                        >
                           Ver stock
                        </Button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         <Divider />

         <h2>Seleccionar una Verdura</h2>
         <FormControl fullWidth>
            <InputLabel>Verdura</InputLabel>
            <Select value={verduraSeleccionada} onChange={handleChange}>
               {verduras.map((data) => (
                  <MenuItem key={data.id} value={data.id}>
                     {data.nombre}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>

         <Divider color='primary'/>

         <ListaProductoDiAlgo
         data={data.store}
         />


      </div>
   )
}
