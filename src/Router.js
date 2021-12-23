//basic imports
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import components:
import Home from './components/home'
import Layout from './components/layout'
import ObrasArt from "./components/obrasArt";
import CreateNewArt from "./components/obrasArt/CreateNewArt";
import SingleArt from "./components/obrasArt/Single";
import EditarObra from "./components/obrasArt/Single/EditarObra";
//login y register
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Auth from "./routes/Auth"
import Private from "./routes/Private";
import PerfilUser from "./components/Perfil/PerfilUser";
import SingleProfile from "./components/Perfil/index";
import Perfiles from "./components/User/index"
import EditPerfil from "./components/Perfil/EditPerfil";
import CrearPerfil from "./components/Perfil/CrearPerfil";
//importamos estates- global state
import ArtState from "./context/ObrasArt/ArtState"
import UsuarioState from "./context/Usuarios/UsuarioState";
import PerfilState from "./context/UserPerfil/PerfilState"



export default function Router() {
    return (
        <>
        <UsuarioState>
          <PerfilState>
             <ArtState>

        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout/>}>
                 <Route index element={<Home/>}/>
                 <Route path='/articulos' element={<ObrasArt/>}/>
                 <Route path='/perfilesArt' element={<Perfiles/>}/>
                 <Route path='/perfilesArt/:id'element={<PerfilUser/>}/>
                 <Route path='/articulos/:id' element={<SingleArt/>}/>
                 <Route path='/articulos/crearArticulo' element={<Private component={CreateNewArt}/> }/>
                 <Route path='/articulos/:id/editarArticulo' element={<Private component={EditarObra}/>}/>
                 <Route path='/iniciaSesion' 
                 element={<Auth component={Login}/>}/>
                 <Route path='/registro' 
                 element={<Auth component={Register}/>}
                 />
                  {/* <Route path="/perfil" element={<Private component={PerfilUser}/>}/> */}
                  <Route path="/crearPerfil" element={<Private component={CrearPerfil}/>}/>
                  <Route path="/editarPerfil/:id" element={<Private component={EditPerfil}/>} /> 
             
             </Route>
          </Routes>
        </BrowserRouter>

        </ArtState>
        </PerfilState>
        </UsuarioState>
        </>
    )
}
