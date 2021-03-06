import React, {useState, useContext, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
//IMPORTAR CONTEXTO DE PERFILES CUANDO ESTE LISTO
import UsuariosContext from "./../../context/Usuarios/UsuarioContext";
import PerfilContext from '../../context/UserPerfil/PerfilContext'


export default function EditPerfil() {
    const navigate = useNavigate()

    const ctx = useContext(PerfilContext)
    const userCtx = useContext(UsuariosContext)
    const params = useParams()
    const idPerfil = params.id
    //const navigate = useNavigate()
    const{ updateProfile, userPerfil, getOneProfile }=ctx
    const { 
        currentUser,
        verifyingToken
      } = userCtx
      const[perfilData, setPerfilData]=useState({
        nombre:"",
        foto:"",
        nickName:"",
        edad:"",
        socialMedia1:"",
        socialMedia2:"",
        socialMedia3:"",
        email:""
      })
      useEffect(()=>{
          getOneProfile(idPerfil)
      },[])

      useEffect(()=>{
        verifyingToken()
       },[])

       useEffect(()=>{
           const{
               nombre,
               foto,
               nickName,
               edad,
               socialMedia1,
               socialMedia2,
               socialMedia3,
               email
           }= ctx.userPerfil

           setPerfilData({
               nombre:nombre,
               foto:foto,
               nickName:nickName,
               edad:edad,
               socialMedia1:socialMedia1,
               socialMedia2:socialMedia2,
               socialMedia3:socialMedia3,
               email:email
           })
        }, [userPerfil])

        const handleChange = (e)=>{
            e.preventDefault()
            setPerfilData({
                ...perfilData,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit = (e)=>{
            e.preventDefault()
           updateProfile(perfilData, idPerfil)
           navigate('/perfilesArt')
               
          
        }


    return (
        <div>
           <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="md:flex md:items-center md:justify-center">
  
       <form  onSubmit={(event)=>{handleSubmit(event)}} class="space-y-8 divide-y divide-gray-200">
  <div class="space-y-8 divide-y divide-gray-200">
    <div>
      <div>
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
            Editar mi perfil
            
          </h2>
        <p class="mt-1 text-sm text-gray-500">
         Puedes actualizar tus datos aqu??.
        </p>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        
      <div class="sm:col-span-3">
          <label for="nombre" class="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <div class="mt-1">
            <input type="text" onChange={(event)=>{handleChange(event)}}
            value={perfilData.nombre}
            type='text' name="nombre" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="foto" class="block text-sm font-medium text-gray-700">
            Foto:
          </label>
          <div class="mt-1">
            <input type="text" onChange={(event)=>{handleChange(event)}}
           value={perfilData.foto}
           type='text' name="foto" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

           <div class="sm:col-span-6">
          <label for="about" class="block text-sm font-medium text-gray-700">
            Descripci??n
          </label>
          <div class="mt-1">
            <textarea onChange={(event)=>{handleChange(event)}}
            value={perfilData.descripcion}
            type='text'  name="descripcion" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
          </div>
          <p class="mt-2 text-sm text-gray-500">Breve descripci??n de tu art??culo a vender.</p>
        </div>

        <div class="sm:col-span-3">
          <label for="foto" class="block text-sm font-medium text-gray-700">
            Nick name:
          </label>
          <div class="mt-1">
            <input type="text"
            value={perfilData.nickName}
            onChange={(event)=>{handleChange(event)}}
            type='text' name="nickName" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="foto" class="block text-sm font-medium text-gray-700">
            Edad:
          </label>
          <div class="mt-1">
            <input type="text"
            value={perfilData.edad}
            onChange={(event)=>{handleChange(event)}}
            type='text' name="edad" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for=" " class="block text-sm font-medium text-gray-700">
            Social media1
          </label>
          <div class="mt-1">
            <input type="text"
            value={perfilData.socialMedia1}
            onChange={(event)=>{handleChange(event)}}
            type='text' name="socialMedia1" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="" class="block text-sm font-medium text-gray-700">
            Social media2
          </label>
          <div class="mt-1">
            <input type="text"
            value={perfilData.socialMedia2}
            onChange={(event)=>{handleChange(event)}}
            type='text' name="socialMedia2" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="foto" class="block text-sm font-medium text-gray-700">
            Social media3
          </label>
          <div class="mt-1">
            <input type="text"
            value={perfilData.socialMedia3}
            onChange={(event)=>{handleChange(event)}}
            type='text' name="socialMedia3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="foto" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div class="mt-1">
            <input type="text"
            value={perfilData.email}
            onChange={(event)=>{handleChange(event)}}
            type='text' name="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
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



        </div>
    )
}
