import React, {useContext, useEffect} from 'react'
import ObrasArtContext from './../../../context/ObrasArt/ArtContext'
import { useParams,Link } from 'react-router-dom'

export default function SingleArt() {
     const ctx = useContext(ObrasArtContext)
     const {singleArt, getSingleArt} = ctx

     const params=useParams()
     const id=params.id

     useEffect(()=>{
        getSingleArt(id) 
     },[])
     console.log(singleArt);


    return (
        <div>
            <Link to={`/articulos/${id}/editarArticulo`}>
							<button type="button" >
								Editar Articulo
							</button>
						</Link>
            <h2>Articulo encontrado</h2>
            <h1>{singleArt.titulo}</h1>
            <p>{singleArt.descripcion}</p>
        </div>
    )
}
