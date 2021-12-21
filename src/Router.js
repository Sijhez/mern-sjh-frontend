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
import PerfilUser from "./components/User/PerfilUser";
//importamos estates- global state
import ArtState from "./context/ObrasArt/ArtState"
import UsuarioState from "./context/Usuarios/UsuarioState";



export default function Router() {
    return (
        <>
        <UsuarioState>
          <ArtState>

        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout/>}>
                 <Route index element={<Home/>}/>
                 <Route path='/articulos' element={<ObrasArt/>}/>
                 <Route path='/articulos/:id' element={<SingleArt/>}/>
                 <Route path='/articulos/crearArticulo' element={<CreateNewArt/>}/>
                 <Route path='/articulos/:id/editarArticulo'
                 element={<EditarObra/>}/>
                 <Route path='/iniciaSesion' 
                 element={<Auth component={Login}/>}/>
                 <Route path='/registro' 
                 element={<Auth component={Register}/>}
                 />
                 <Route path="/perfil" element={<Private component={PerfilUser}/>}/>
             </Route>
          </Routes>
        </BrowserRouter>

        </ArtState>
        </UsuarioState>
        </>
    )
}
