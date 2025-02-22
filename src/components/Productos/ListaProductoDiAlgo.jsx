import Grid from '@mui/material/Grid2';

import React from 'react'
import { Typography , Card } from '@mui/material';
import MiDialogo from './Midialogo';

export default function ListaProductoDialogo (props) {
const data = props.data
   console.log(data)
  return (
    <div>
        <h2>Consumo de un opjeto</h2>

        <Grid container spacing={3}>

         {data.book.map((libro,index) => (

          <Grid size={{sm:12, md: 4}} key={index}>
                <Card variant='outlined' color='primary' style={{padding:15}}>
                    <Typography variant='h4' color='initial'>Libro</Typography>
                    <Typography variant='h5' color='initial'>Titulo: {libro.title} </Typography>
                    <Typography variant='h5' color='initial'>Autor:  {libro.author}</Typography>
                    <Typography variant='h5' color='initial'>Categoria: {libro.category}</Typography>
                    <MiDialogo
                    datos={libro}/>
                </Card>
            </Grid>
         ) )}


        </Grid>
    </div>
  )
}