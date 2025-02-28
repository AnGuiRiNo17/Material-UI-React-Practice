import { Route, Routes } from 'react-router-dom'

// Importar componentes
import PageHome from './home/pageHome'
import PageContact from './contact/pageContact'
import PageAbout from './about/pageAbout'
import HomePage from '../pages/HomePage'


export default function AppRoutes () {
    return (

        <Routes>

            <Route path='/' element={<PageHome/>} />

            <Route path='/recetas' element={<HomePage/>} />

            <Route path='/about' element={<PageAbout/>} />

            <Route path='/contact' element={<PageContact/>} />

        </Routes>
    )
}