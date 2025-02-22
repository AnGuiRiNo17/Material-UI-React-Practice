import * as React from 'react';
// import MainTienda from './components/Tienda/MainTienda/MainTienda.jsx';
import ComponenteEncabezado from './ComponenteEncabezado.jsx'
import HomePage from './pages/HomePage.Jsx';
// import ListaVerduras from './components/Productos/ListaVerduras.jsx';

export default function App() {
  
  return (
    <>
    {/* <MainTienda/> */}
      <ComponenteEncabezado/>
      {/* <ListaVerduras/> */}
      <HomePage/>
    </>
);
}