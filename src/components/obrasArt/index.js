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
        <div>
            <h1>Todas las obras de arte aqui</h1>
            {
            obrasArt.map((articulo)=>{
                return(
                    <>
                      <h3>{articulo.titulo}</h3>
                      <Link to={`/articulos/${articulo._id}`}>
                      <p>Ver artículo</p>
                      </Link>
                    </>
                )
            })

            }
        </div>
    )
}
