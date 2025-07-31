import React from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import AddProducts from "./Pages/AddProducts"
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetail from './Pages/ProductDetail'
import HomeUser from './Pages/HomeUser'
import ProductDetailUser from './Pages/productDetailUser'
const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<HomeUser/>}/>
        <Route path='/products/detail/:productId' element={<ProductDetailUser/>}/>
 
        <Route  path='/admin/' element={<Home/>}/>
        <Route  path='/admin/products/add' element={<AddProducts/>}/>
        <Route  path='/admin/products/detail/:productId'  element={<ProductDetail/>}/>
      </Routes> 

    </div>


  )
}

export default App
