import { Route, Routes } from 'react-router-dom';
import PageHome from './home/pageHome';
import PageContact from './contact/pageContact';
import PageAbout from './about/pageAbout';
import NotFound from './NotFound';
import ListaBloques from './bloques/ListaBloques';
import BlockPage from './bloques/BlockPage';
import ItemPage from './item/ItemPage';
import BusquedaPage from './item/BusquedaPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<PageHome/>} />
      <Route path='/about' element={<PageAbout/>} />
      <Route path='/contact' element={<PageContact/>} />
      
      {/* Ruta de búsqueda */}
      <Route path='/recetas' element={<BusquedaPage/>} />
      
      {/* Ruta para bloques */}
      <Route path='/bloques'>
        <Route index element={<ListaBloques/>}/>
        <Route path=':id' element={<BlockPage/>}/>
      </Route>
      
      {/* Ruta para items - CORREGIDO */}
      <Route path='/items/:id' element={<ItemPage/>} /> {/* Cambiado de '/item' a '/items' */}

      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}