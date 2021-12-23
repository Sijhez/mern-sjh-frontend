//ESTADO GLOBAL DE LOS PERFILES GENERADOS

import { useReducer } from "react";
import PerfilContext from "./PerfilContext";
import PerfilReducer from "./PerfilReducer"

import axiosClient from "../../config/axios";

const PerfilState = (props)=>{
    //estado inicial
    const initialState = {
         perfiles:[],
         userPerfil:{
             nombre:"",
             foto:"",
             nickName:"",
             edad:"",
             socialMedia1:"",
             socialMedia2:"",
             socialMedia3:"",
             email:"",
             id:""
          },
          statusProfile:false
      }

      const[globalState, dispatch]=useReducer(PerfilReducer, initialState)

      //funciones para alterar estado global
      //conseguir los perfiles de DB
      const getAllProfiles = async()=>{
          const res = await axiosClient.get("perfiles/verPerfiles")

          const listPerfiles = res.data.data
          dispatch({
              type:"GET_PROFILES",
              payload:listPerfiles
          })
      }
      //conseguir un perfil de DB
      const getOneProfile = async(profileId)=>{
          const res= await axiosClient.get(`perfiles/${profileId}`)
          const selectedProfile = res.data.data
          dispatch({
              type:"GET_PROFILE",
              payload:selectedProfile
          })

      }

      //crear un perfil en DB
      const createNewProfile = async(form)=>{
          const res = await axiosClient.post('perfiles/crearPerfil', form)
          console.log(res)
      }

      const updateProfile = async(form, idPerfil)=>{
          const res =await axiosClient.put( `perfiles/editarPerfil/${idPerfil}`, form)
          const updatedProfile = res.data.data
          dispatch({
              type:"UPDATE_PERFIL",
              payload:updatedProfile
          })
      }

      return(
          <PerfilContext.Provider
          value={{
              perfiles:globalState.perfiles,
              userPerfil:globalState.userPerfil,
              getAllProfiles,
              getOneProfile,
              createNewProfile,
              updateProfile
          }}
          >
               {props.children}
          </PerfilContext.Provider>
      )

}
export default PerfilState