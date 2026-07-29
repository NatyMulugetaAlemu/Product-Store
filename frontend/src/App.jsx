import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
      </Routes>
    </div>
  )
}

export default App