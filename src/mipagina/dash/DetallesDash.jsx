import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"

export default function DetallesDash() {

    let { id } = useParams();

    React.useEffect(() => {
        const darbienvenida = () => {
            alert('Hola bienvenido a la pagina de detalles')
        }
        darbienvenida();
    }, [])

  return (
    <div>
      
      Soy componente Detalles <br/>
      <h2>Id obtenidad desde URL: { id }</h2>
      <br />
    </div>
  )
}

