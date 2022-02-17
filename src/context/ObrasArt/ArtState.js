//configurando estado global de los articulos

import { useReducer } from "react";
import ObrasArtContext from "./ArtContext";
import ObrasArtReducer from './ArtReducer'
//IMPORTAMOS AXIOS CLIENT PARA CONECTAR CON SERVIDOR
import axiosClient from '../../config/axios'


const ObrasArtState = (props) =>{
    
    //estado Inicial
    const initialState = {
        obrasArt:[],
        singleArt:{
            titulo:"",
            descripcion:"",
            imagen1:"",
            imagen2:"",
            imagen3:"",
            precio:"",
            autor:""
        }
    }

    //configuracion de reducer y creacion de estado global:
    const [globalState, dispatch] = useReducer(ObrasArtReducer, initialState)
   
    //funciones para alterar globalState
//conseguir todas las obras de arte
    const getObrasArtAll = async() =>{
        const res = await axiosClient.get("articulos/verArticulos")
        console.log("Consiguiendo artículos");
        // console.log(res)

        const listArt = res.data.data
        dispatch({
            type:"GET_ARTICLES",
            payload:listArt
        })

    }
//conseguir una obra de arte

const getSingleArt = async (obraId) => {
    const res =await axiosClient.get(`articulos/verArticulos/${obraId}`)

    const selectedObraArt = res.data.data
    dispatch({
        type:"GET_OBRA",
        payload:selectedObraArt
    })
    //console.log(res);

}
//crear una obra de arte
    const createNewArt = async(form)=>{
        const res = await axiosClient.post("articulos/crearArticulo", form)
        console.log(res)

    }
//EDITAR UNA OBRA DE ARTE
const updateArt = async (form, idObra)=>{
    const res = await axiosClient.put(`articulos/editarArticulo/${idObra}`, form)
    const updateObraArt = res.data.data
    dispatch({
        type:"UPDATE_OBRA",
        payload:updateObraArt
    })

}

//BORRAR UNA OBRA DE ARTE
const deleteArt = async (idObra)=>{
    
    const res = await axiosClient.delete(`articulos/borrarArticulo/${idObra}`)
    res.redirect("/articulos")
}

    //generamos retorno para dispatch

    return(
      //usamos provider para dar acceso a los components para el estado global
      <ObrasArtContext.Provider
        value={{
            obrasArt:globalState.obrasArt,
            singleArt:globalState.singleArt,
            getSingleArt,
            getObrasArtAll,
            createNewArt,
            updateArt,
            deleteArt

        }}
        >
             {props.children}
      </ObrasArtContext.Provider>


    )


}

export default ObrasArtState