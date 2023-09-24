import React from 'react'
import salud from './assets/images/salud.svg';
import otros from './assets/images/otros.svg';
import transporte from './assets/images/transporte.svg';
import utilidades from './assets/images/utilidades.svg';
import alimentacion from './assets/images/alimentacion.svg';
import { Icono } from './Components/UI';

export default (type) => {
    const Images = {
        Salud: <Icono src={salud} alt='Salud' />,
        Otros: <Icono src={otros} alt='Otros' />,
        Restaurante: <Icono src={alimentacion} alt='Restaurante' />,
        Transporte: <Icono src={transporte} alt='Transporte' />,
        Utilidades: <Icono src={utilidades} alt='Utilidades' />,
        Default: <Icono src={otros} alt='Otros' />,
    };
    return Images[type] || Images['default'];
};