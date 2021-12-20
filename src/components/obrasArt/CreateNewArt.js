import React, {useState, useContext} from 'react'
import ObrasArtContext from '../../context/ObrasArt/ArtContext'

export default function CreateNewArt() {
      //definir estado global   
      const ctx = useContext(ObrasArtContext)
      const {
          createNewArt
      } = ctx
      //crear estado local formulario
      const [newArt, setNewArt] = useState({
          titulo:"",
          descripcion:"",
          imagen1:"",
          imagen2:"",
          imagen3:"",
          precio:""
         })
    
         //funciones
         const handleChange = (e)=>{
             e.preventDefault()
             setNewArt({
                 ...newArt,
                 [e.target.name]:e.target.value
             })
         }

         const handleSubmit = (e)=>{
             e.preventDefault()
             createNewArt(newArt)
         }



    return (
        <>
            <h1>Aqui para crear nueva obra de arte</h1>
            <form onSubmit={(event)=>{handleSubmit(event)}}>
            <label>Titulo de artículo:</label>
                <input onChange={(event)=>{handleChange(event)}} type='text' name="titulo"/><br/>
                <label>Descripción:</label>
                <input onChange={(event)=>{handleChange(event)}} type='text' name="descripcion"/><br/>
                <label>Precio:</label>
                <input onChange={(event)=>{handleChange(event)}} type='text' name="precio"/><br/>
                <label>Imagen1:</label>
                <input onChange={(event)=>{handleChange(event)}} type='text' name="imagen1"/><br/>
                <label>Imagen2</label>
                <input onChange={(event)=>{handleChange(event)}} type='text' name="imagen2"/><br/>
                <label>Imagen3</label>
                <input onChange={(event)=>{handleChange(event)}} type='text' name="imagen3"/><br/>
                <button type="submit">
            Guardar Articulo
          </button>
            </form>
        </>
    )
}
