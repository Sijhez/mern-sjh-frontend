import React, {useState, useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ObrasArtContext from './../../../context/ObrasArt/ArtContext'

export default function EditarObra() {
    //definir estado global
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
     
   }
      



    return (
        <div>
            <h1>Aqui puedes editar tu artículo</h1>
            <form onSubmit={(event)=>{handleSubmit(event)}}>
            <label>Titulo de artículo:</label>
                <input onChange={(event)=>{handleChange(event)}} value={artData.titulo} type='text' name="titulo"/><br/>
                <label>Descripción:</label>
                <input onChange={(event)=>{handleChange(event)}} type='text' value={artData.descripcion} name="descripcion"/><br/>
                <label>Precio:</label>
                <input onChange={(event)=>{handleChange(event)}} type='text' value={artData.precio} name="precio"/><br/>
                <label>Imagen1:</label>
                <input onChange={(event)=>{handleChange(event)}} type='text' value={artData.imagen1} name="imagen1"/><br/>
                <label>Imagen2</label>
                <input onChange={(event)=>{handleChange(event)}} type='text' value={artData.imagen2} name="imagen2"/><br/>
                <label>Imagen3</label>
                <input onChange={(event)=>{handleChange(event)}} type='text' value={artData.imagen3} name="imagen3"/><br/>
                <button type="submit">
            Guardar Articulo
          </button>
            </form>
            
        </div>
    )
}
