import React from 'react';
import { Button } from '../../UI/Button/Button';
import { NavLink } from 'react-router-dom';



export const Header = () => {
  return (
    <header>
        <nav class = "header">
            <NavLink to='/'><Button claseColor= "botones_header" nombre_boton="Home" /></NavLink>
            <NavLink to='/AboutUs'><Button claseColor= "botones_header"  nombre_boton="AboutUs" /></NavLink>
            <NavLink to='/Contacto'><Button claseColor= "botones_header" nombre_boton="Contact" /></NavLink>
            <NavLink to='/Contador'><Button claseColor= "botones_header" nombre_boton="Contador" /></NavLink>
            <NavLink to='/ContadorEfect'><Button claseColor= "botones_header" nombre_boton="Efecto" /></NavLink>
            <NavLink to='/OnOff'><Button claseColor= "botones_header" nombre_boton="Cards" /></NavLink>
        </nav>
    </header>
  )
}
