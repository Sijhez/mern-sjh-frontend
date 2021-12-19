//basic imports
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import components:
import Home from './components/home'
import Layout from './components/layout'

export default function Router() {
    return (
        <>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout/>}>
                 <Route index element={<Home/>}/>
             </Route>
          </Routes>
        </BrowserRouter>
        </>
    )
}
