import React, {useState, useContext} from 'react'
//import { Link } from 'react-router-dom'
import UsuariosContext from '../../context/Usuarios/UsuarioContext'

export default function Register() {
    const ctx = useContext(UsuariosContext)
    const{
        registroUsuario
    } = ctx

    const [newUsuario, setNewUsuario] = useState({
        nombre:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        e.preventDefault()
        setNewUsuario({
          ...newUsuario,
          [e.target.name]:e.target.value
        })
       }
     
       const handleSubmit = (e)=>{
         e.preventDefault()
         registroUsuario(newUsuario)
           
       }



    return (
        <div>
            <h1>Registro aqui</h1>
            <form onSubmit={(event)=>{handleSubmit(event)}} >
                <label>Tu nombre</label>
                <input
                onChange={(event)=>{handleChange(event)}}
                name="nombre"
                type="text"/><br/>
                <label>Email</label>
                <input 
                onChange={(event)=>{handleChange(event)}}
                name="email"
                type="email"/><br/>
                <label>Password</label>
                <input
                onChange={(event)=>{handleChange(event)}}
                name="password"
                type="password"/><br/>

                <button type='submit'>
                    Crea tu cuenta
                </button>
            </form>

        </div>
    )
}
