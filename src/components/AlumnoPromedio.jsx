import React from 'react';
import { ContenedorAprobado } from './Alumnospro/ContenedorAprobado';
import { ContenedorReprobado } from './Alumnospro/ContenedorReprobado';

export const AlumnoPromedio = () => {
    const material1 = 9;
    const material2 = 8;
    const resultado = (material1 + material2) / 2;

    if (resultado >= 8) {
        return (
            <>
            <ContenedorAprobado/>
            <h1>resultado: {resultado}</h1>
            </>
        );
    } else {
        return (
            <>
            <ContenedorReprobado/>
            <h1>resultado: {resultado}</h1>
            </>
        );
    }
};
