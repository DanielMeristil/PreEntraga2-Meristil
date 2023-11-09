import { useState,useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/Counter/Counter'
import Card from './components/Card/Card'
import colorFondo from './components/colorFondo/colorFondo'
import Button from './components/Button/Button'
import RenderProp from './components/RenderProp/RenderProp'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto'
import Ubicacion from './components/Ubicacion/Ubicacion'
import Error from './components/Error/Error'
import Cart from './components/Card/Cart/Cart'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/:categoryId' element={<ItemListContainer/>}/>
    <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
    <Route path='/Contacto' element={<Contacto/>}/>
    <Route path='/Ubicacion' element={<Ubicacion/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='*' element={<Error/>}/>

    
    </Routes>

    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
