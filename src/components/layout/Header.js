import React, {useEffect, useContext} from "react";
import {Link, useParams} from 'react-router-dom'
import UsuariosContext from "../../context/Usuarios/UsuarioContext";
import PerfilContext from '../../context/UserPerfil/PerfilContext';

const Header = () => {
     
  const params =useParams()
  const idUsuario=params.id


   const ctx = useContext(UsuariosContext)
   const profileCtx = useContext(PerfilContext)
   const{
    userPerfil,getOneProfile
  } = profileCtx


   const {
     currentUser,
     verifyingToken,
     logoutUsuario
   } = ctx

   useEffect(()=>{
    verifyingToken()
   },[])

   useEffect(()=>{
    getOneProfile(idUsuario)
  },[])


    return (
        <>

<header class="bg-sky-900">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
    <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
      <div class="flex items-center">
      <Link to='/'>
          <span class="sr-only">Workflow</span>
          <img class="h-10 w-auto" src="https://i.ibb.co/R9Ztq5M/logo-Media-Mesa-de-trabajo-1.png" alt=""/>
          </Link>
        <div class="hidden ml-10 space-x-8 lg:block">

       
          
          <Link to='/articulos'className="text-base font-medium text-white hover:text-indigo-50" > 
        
          Galería de Artículos
           </Link>

           <Link to='/perfilesArt'className="text-base font-medium text-white hover:text-indigo-50" > 
        
          Artistas
           </Link>

           {
             userPerfil.idUsuario ? 
             <>
            

                   <button type="button" style={{display:'none'}} class="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                   Crear mi perfil
                 </button>
                   
             </>
             :
             <Link to={"/crearPerfil"}className="text-base font-medium text-white hover:text-indigo-50" > 
                 Crear mi perfil
                 </Link>
           }

           {
             currentUser.nombre ?
             <>
             <Link to='/articulos/crearArticulo' className="text-base font-medium text-white hover:text-indigo-50">Crear un artículo</Link>
             
              <Link to={`/perfilesArt/${userPerfil._id}`} className="text-base font-medium text-white hover:text-indigo-50">
               Bienvenid@
               {currentUser.nombre}
               </Link>
             
               <a href="/" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50" 
               onClick={()=> logoutUsuario()}>Cerrar Sesion</a>
             
             </> 
             :
             <>
              <Link to='/registro'> 
              <a href="#" class="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Registro</a> </Link>
           <Link to='/iniciaSesion'> 
           <a href="#" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">Log In</a> </Link>
             </>
           }
           
           
          
           
         
         
         
        </div>
      </div>
     
      <div class="ml-10 space-x-4">

      

        
        
      </div>
    </div>
    
    <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
      

      
    </div>
  </nav>
</header>
        </>
    )
}

export default Header
