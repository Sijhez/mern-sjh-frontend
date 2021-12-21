import React, {useContext, useEffect} from 'react'
import ObrasArtContext from './../../../context/ObrasArt/ArtContext'
import { useParams,Link, useNavigate } from 'react-router-dom'
import UsuariosContext from "./../../../context/Usuarios/UsuarioContext";
export default function SingleArt() {
    const navigate = useNavigate()
    const userCtx = useContext(UsuariosContext)
    const{ currentUser,verifyingToken } = userCtx

     const ctx = useContext(ObrasArtContext)
     const {singleArt, getSingleArt, deleteArt} = ctx

     const params=useParams()
     const id=params.id

     useEffect(()=>{
        getSingleArt(id) 
     },[])

     useEffect(()=>{
         verifyingToken()
     },[])

     //console.log(singleArt);


    return (
        <>
        <div class="bg-white">
  <div class="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
      <div>
        <div class="border-b border-gray-200 pb-10">
          <h2 class="font-medium text-gray-500">Nombre Artista</h2>
          <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{singleArt.titulo}</p>

          <p class="mt-4 text-base font-medium text-gray-900">
                        $  {singleArt.precio}.00 MXN
                        </p>
        </div>

        <dl class="mt-10 space-y-10">
          <div>
            <dt class="text-sm font-medium text-gray-900">Descripción</dt>
            <dd class="mt-3 text-sm text-gray-500">{singleArt.descripcion}</dd>
          </div>

          {
                currentUser.nombre ?<>
                <Link to={`/articulos/${id}/editarArticulo`}>
                  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Editar Articulo
                   </button>
                </Link>

                
                <button onClick={()=>deleteArt(id)} type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Eliminar artículo
                  </button>
                
             </>: <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Ver Perfil
                   </button>
             }

<button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Comprar artículo
                   </button>
          {/* <div>
            <dt class="text-sm font-medium text-gray-900">Comfort handle</dt>
            <dd class="mt-3 text-sm text-gray-500">Shaped for steady pours and insulated to prevent burns.</dd>
          </div>

          <div>
            <dt class="text-sm font-medium text-gray-900">One-button control</dt>
            <dd class="mt-3 text-sm text-gray-500">The one button control has a digital readout for setting temperature and turning the kettle on and off.</dd>
          </div> */}

          {/* <div>
            <dt class="text-sm font-medium text-gray-900">Long spout</dt>
            <dd class="mt-3 text-sm text-gray-500">Designed specifically for controlled pour-overs that don&#039;t slash or sputter.</dd>
          </div> */}
        </dl>
      </div>

      <div>
        <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
          <img src={singleArt.imagen1} alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system." class="w-full h-full object-center object-cover"/>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
          <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
            <img src={singleArt.imagen2} alt="Detail of temperature setting button on kettle bass with digital degree readout." class="w-full h-full object-center object-cover"/>
          </div>
          <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
            <img src={singleArt.imagen3} alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug." class="w-full h-full object-center object-cover"/>
          </div>
        </div>

        

      </div>
    </div>
  </div>
</div>

            
           
            
            
        </>
    )
}
