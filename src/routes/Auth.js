import React, {useContext, useEffect, useState} from "react";
import { Navigate } from "react-router-dom";

import UsuariosContext from "../context/Usuarios/UsuarioContext";

export default function PublicRoute({component: Component, ...props}){
    const userCtx = useContext(UsuariosContext)
     
    const{ authStatus, verifyingToken } = userCtx
   const[loading, setLoading] = useState(true)

   useEffect(async()=>{
       await verifyingToken()
       setLoading(false)

   },[authStatus])

   return(
       <>
         {
             authStatus ?
             (<Navigate replace to='/iniciaSesion'/>) 
             : 
             (<Component/>)
         }
       </>
   )


}