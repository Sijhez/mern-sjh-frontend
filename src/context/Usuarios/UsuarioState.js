import { useReducer } from "react";
import UsuarioReducer from './UsuarioReduce'
import UsuariosContext from "./UsuarioContext";
import axiosClient from "../../config/axios";

const UsuarioState = (props) =>{
    const initialState = {
        currentUser:{
            nombre:"",
            email:"",
            password:"",
            myArticles:[]
        },
        authStatus:false
    }
   const[globalState, dispatch] = useReducer(UsuarioReducer, initialState)

   const registroUsuario = async(form)=>{
       const res = await axiosClient.post("usuarios/registro",form)
       //cuando el usuario se registra recibimos el token correspondiente
       const token = res.data.data
       //console.log(res)
       dispatch({
           type:"REGISTRO_USUARIO",
           payload:token
       })

   }

   const loginUsuario = async(form)=>{
    const res = await axiosClient.post("usuarios/inicioSesion",form)
    //cuando el usuario se registra recibimos el token correspondiente
    const token = res.data.data
    console.log(res)
    dispatch({
        type:"LOGIN_USUARIO",
        payload:token
    })
}
    const verifyingToken = async()=>{
        const token = localStorage.getItem("token")
        token ? axiosClient.defaults.headers.common["x-auth-token"] = token
        : delete axiosClient.defaults.headers.common["x-auth-token"]
    
        try {
            const res = await axiosClient.get("usuarios/verificaToken")
            console.log(res)
            const usuarioDatos = res.data.data
            dispatch({
                type:"GET_DATA_USUARIO",
                payload:usuarioDatos
            })
            
        } catch (error) {
            console.log(error)
            
        }

    }

    const logoutUsuario = async () => {

		dispatch({
            type: "LOGOUT_USUARIO"
        })

	}

   return(
       <UsuariosContext.Provider
       value={{
        currentUser:globalState.currentUser,
        authStatus:globalState.authStatus,
        idUsuario:globalState.idUsuario,
        registroUsuario,
        loginUsuario,
        verifyingToken,
        logoutUsuario
        }}
       >
           {props.children}
               
           
       </UsuariosContext.Provider>
   )

}

export default UsuarioState