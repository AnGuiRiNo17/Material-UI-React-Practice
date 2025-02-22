import React from 'react'
import Switch from '@mui/material/Switch'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import ListaVerduras from './productos/ListaVerduras'

const ListaProductos = () => {

  const [home, setHome] = useState(false);

	const changeState = () => {
    setHome(!home)
    console.log('Tu switch esta: ', home)
	}


	return (

	<div>
	   <Switch
	     value="home"
	     checked={home}
	     onChange={changeState}
	     inputProps={{ "aria-label": '' }}
	   />
	   {
	     <Typography variant={home ? "h1" : "h3"} color={home ? "success" : "error"}>
	       {home ? "Encendido" : "Apagado"}
	     </Typography>
		}
			<Divider color="secondary" />

			<ListaVerduras/>

	  </div>
	)
}

export default ListaProductos