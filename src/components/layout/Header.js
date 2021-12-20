import React from "react";
import {Link} from 'react-router-dom'


const header = () => {
    return (
        <>
          <ul>
           <Link to='/registro'> <li>Registro</li> </Link>
           <Link to='/iniciaSesion'> <li>Login</li> </Link>
           <Link to='/articulos'> <li>Galería de artículos</li> </Link>
           <Link to='/articulos/crearArticulo'>Crear un artículo</Link>
           
           {/* <Link to='/subastas'> <li>Subastas</li> </Link> */}
           <Link to='/'> <li>Home</li> </Link>
          </ul>
        </>
    )
}

export default header
