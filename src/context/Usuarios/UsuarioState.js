import { useReducer } from "react";
import UsuarioReducer from './UsuarioReduce'
import UsuariosContext from "./UsuarioContext";
import axiosClient from "../../config/axios";

const UsuarioState = (props) =>{
    const initialState = {
        currentUser:{
            nombre:"",
            email:"",
            password:""
        },
        authStatus:false
    }
   const[globalState, dispatch] = useReducer(UsuarioReducer, initialState)

   const registroUsuario = async(form)=>{
       const res = await axiosClient.post("usuarios/registro",form)
       //cuando el usuario se registra recibimos el token correspondiente
       const token = res.data.data
       console.log(token)
       dispatch({
           type:"REGISTRO_USUARIO",
           payload:token
       })

   }

   return(
       <UsuariosContext.Provider
       value={{
        currentUser:globalState.currentUser,
        registroUsuario
        }}
       >
           {props.children}
               
           
       </UsuariosContext.Provider>
   )

}

export default UsuarioState