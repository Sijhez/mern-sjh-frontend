import React, {useEffect, useContext} from 'react'
import ObrasArtContext from '../../context/ObrasArt/ArtContext'
import { Link } from 'react-router-dom'

export default function ObrasArtAll() {
    //ESTADO GLOBAL
        const ctx = useContext(ObrasArtContext)
        const {obrasArt, getObrasArtAll} = ctx

    //ESTADO LOCAL
    useEffect(()=>{
        getObrasArtAll()
    },[])

    return (
        <>
            

            <div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="md:flex md:items-center md:justify-between">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Bazar</h2>
      {/* <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">Shop the collection<span aria-hidden="true"> &rarr;</span></a> */}
    </div>

    <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {
            obrasArt.map((articulo)=>{
                return(
                    <>

<div class="group relative">
        <div class="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
          <img src={articulo.imagen1} alt="Hand stitched, orange leather long wallet." class="w-full h-full object-center object-cover"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
        <Link to={`/articulos/${articulo._id}`}>
            <span class="absolute inset-0"></span>
            {articulo.titulo}
            </Link>
        </h3>
        <p class="mt-1 text-sm text-gray-500">Artista Nombre</p>
        <p class="mt-1 text-sm font-medium text-gray-900">$ {articulo.precio}.00 mxn</p>
      </div>

                     
                     
                     
                    </>
                )
            })

            }
            </div>

<div class="mt-8 text-sm md:hidden">
  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Shop the collection<span aria-hidden="true"> &rarr;</span></a>
</div>
</div>
</div>
        </>
    )
}
