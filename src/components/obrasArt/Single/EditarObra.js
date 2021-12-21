import React, {useState, useContext, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ObrasArtContext from './../../../context/ObrasArt/ArtContext'

export default function EditarObra() {
    //definir estado global
    const navigate = useNavigate()
    const ctx = useContext(ObrasArtContext)
    const params = useParams()
    const idObra = params.id
   
    const{
        singleArt,
        getSingleArt,
        updateArt
    } = ctx

    const[artData, setArtData] = useState({
        titulo:"",
        descripcion:"",
        imagen1:"",
        imagen2:"",
        imagen3:"",
        precio:""
    })

    useEffect(()=>{
        getSingleArt(idObra)
    
    },[])

    useEffect(()=>{
        const{
            titulo,
            descripcion,
            imagen1,
            imagen2,
            imagen3,
            precio
        } = ctx.singleArt

        setArtData({
            titulo:titulo,
        descripcion:descripcion,
        imagen1:imagen1,
        imagen2:imagen2,
        imagen3:imagen3,
        precio:precio
        })
   },[singleArt])

   const handleChange = (e) => {
    e.preventDefault()

    setArtData({
        ...artData,
        [e.target.name]: e.target.value
    })

}
   const handleSubmit = (e)=>{
       e.preventDefault()
      updateArt(artData, idObra)
      navigate('/articulos')
          
     
   }


      



    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="md:flex md:items-center md:justify-center">
  
       <form  onSubmit={(event)=>{handleSubmit(event)}} class="space-y-8 divide-y divide-gray-200">
  <div class="space-y-8 divide-y divide-gray-200">
    <div>
      <div>
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
               Editar artículo
            </h2>
        <p class="mt-1 text-sm text-gray-500">
          Edita la información y precio de tu artículo, o súbelo a subasta.
        </p>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        
      <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium text-gray-700">
            Título de Artículo
          </label>
          <div class="mt-1">
            <input type="text" onChange={(event)=>{handleChange(event)}} value={artData.titulo} type='text' name="titulo" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium text-gray-700">
            Precio
          </label>
          <div class="mt-1">
            <input type="number" onChange={(event)=>{handleChange(event)}}  value={artData.precio} name="precio" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        <div class="sm:col-span-6">
          <label for="about" class="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <div class="mt-1">
            <textarea onChange={(event)=>{handleChange(event)}} type='text' value={artData.descripcion} name="descripcion" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
          </div>
          <p class="mt-2 text-sm text-gray-500">Breve descripción de tu artículo a vender.</p>
        </div>
      </div>
    </div>

    <div class="pt-8">
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
         Imágenes
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Puedes poner hasta 3 imágenes
        </p>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

        <div class="sm:col-span-6">
          <label for="street-address" class="block text-sm font-medium text-gray-700">
            Imagen 1
          </label>
          <div class="mt-1">
            <input type="text" onChange={(event)=>{handleChange(event)}} type='text' value={artData.imagen1} name="imagen1"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        <div class="sm:col-span-6">
          <label for="street-address" class="block text-sm font-medium text-gray-700">
            Imagen 2
          </label>
          <div class="mt-1">
            <input type="text" onChange={(event)=>{handleChange(event)}} type='text' value={artData.imagen2} name="imagen2"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        <div class="sm:col-span-6">
          <label for="street-address" class="block text-sm font-medium text-gray-700">
            Imagen 3
          </label>
          <div class="mt-1">
            <input type="text" onChange={(event)=>{handleChange(event)}} type='text' value={artData.imagen3} name="imagen3"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        

        
      </div>
    </div>

  </div>

  <div class="pt-5">
    <div class="flex justify-end">
      <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Cancelar
      </button>
      <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Guardar cambios
      </button>
    </div>
  </div>
</form>
  </div>
        </div>
    )
}
