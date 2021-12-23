import React, {useEffect, useContext, useState}  from 'react'
import {Link, useParams} from 'react-router-dom'
import UsuariosContext from "./../../context/Usuarios/UsuarioContext";
import PerfilContext from '../../context/UserPerfil/PerfilContext';

export default function PerfilUser() {
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

<main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
       
        

       <article>
      
         <div>
           <div>
             <img class="h-32 w-full object-cover lg:h-48" src="https://p4.wallpaperbetter.com/wallpaper/782/869/293/abstraction-texture-colorful-abstract-wallpaper-preview.jpg" alt=""/>
           </div>
           <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
             <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
               <div class="flex">
                 <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={userPerfil.foto} alt=""/> 
               </div>
               {/* https://www.hecmsenior.com/wp-content/uploads/2021/06/Profile-Pic-Icon.png */}
               <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                 <div class="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                   <h1 class="text-2xl font-bold text-gray-900 truncate">
                   {userPerfil.nombre}<br/>
                     </h1>
                   <p>
                     {userPerfil.nickName}
                   </p>
                 </div>
                 <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                   
                  
                 </div>
               </div>
             </div>
             <div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
               <h1 class="text-2xl font-bold text-gray-900 truncate">
               {userPerfil.nombre}
               
               </h1>
                 </div>
           {/* {
             userPerfil.idUsuario ? 
             <>
             <Link to={"/crearPerfil"}>
               <button type="button" style={{float:'right'}} class="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                   Crear mi perfil
                 </button>
                   </Link>
                   
             </>
             :
             <button type="button" style={{display:'none'}} class="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                   Crear mi perfil
                 </button>
           } */}
           
             {
               
                currentUser._id === userPerfil.idUsuario ?
                <>
               <Link to={`/editarPerfil/${userPerfil._id}`}>
               <button type="button" style={{float:'right'}} class="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                   Editar Perfil
                 </button>
                   </Link>
                   </>    
               :
               <Link to={"/articulos"}>
               <button type="button" style={{float:'right'}} class="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                   Ver Articulos
                 </button>
                   </Link>
               
             }
            
           
           </div>

           

         </div>

         <div class="mt-6 sm:mt-2 2xl:mt-5">
           <div class="border-b border-gray-200">
             <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
               <nav class="-mb-px flex space-x-8" aria-label="Tabs">
              
                 <a href="#" class="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
                   Profile
                 </a>

                 {/* <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                   Calendar
                 </a>

                 <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                   Recognition
                 </a> */}
               </nav>
             </div>
           </div>
         </div>

         <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            

             <div class="sm:col-span-1">
               <dt class="text-sm font-medium text-gray-500">
                 Email
               </dt>
               <dd class="mt-1 text-sm text-gray-900">
               {userPerfil.email}
               </dd>
             </div>

             <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Redes sociales
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
               <a href={userPerfil.socialMedia1} target="_blank"> {userPerfil.socialMedia1} </a><br/>
               <a href={userPerfil.socialMedia2} target="_blank"> {userPerfil.socialMedia2} </a><br/>
               <a href={userPerfil.socialMedia3} target="_blank">  {userPerfil.socialMedia3} </a><br/>
                </dd>
              </div>

             <div class="sm:col-span-1">
               <dt class="text-sm font-medium text-gray-500">
                 Title
               </dt>
               <dd class="mt-1 text-sm text-gray-900">
                 Artista / Pintor
               </dd>
             </div>

             <div class="sm:col-span-1">
               <dt class="text-sm font-medium text-gray-500">
                 País
               </dt>
               <dd class="mt-1 text-sm text-gray-900">
                 México
               </dd>
             </div>

             <div class="sm:col-span-1">
               <dt class="text-sm font-medium text-gray-500">
                Locación
               </dt>
               <dd class="mt-1 text-sm text-gray-900">
                 CDMX
               </dd>
             </div>

             

            
             
             <div class="sm:col-span-2">
               <dt class="text-sm font-medium text-gray-500">
                 Sobre mí
               </dt>
               <dd class="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
                {userPerfil.descripcion}
                </dd>
             </div>
           </dl>
         </div>

         
         
       </article>
     </main>
     </>
    )
}
