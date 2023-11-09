import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {

    const enlaces = [
        "Fashon",
        "Producto",
        "Barberia",
        "Maquillaje",
        "Sobre Nosotros",
        "Nuestro Blog",
        "Contacto",
        "Ubicacion"
    ]

    return (
        <div className='nav'>
        <Link className='enlace' to={"/"}>
        <p>INICIO</p>
        </Link>
            
        <ul className='enlacesContainer'>
        {enlaces.map((e,id) => 
        <li className='liContainer' key={id}>
        <NavLink activeClassName="active" to={`${e}`}>
        {e}
        </NavLink>
        </li>
        )}
        </ul>
        </div>
    );
};

export default Navbar;