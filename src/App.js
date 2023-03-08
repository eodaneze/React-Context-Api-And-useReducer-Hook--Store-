import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import About from './pages/About'
const App = () => {
  return (
    <div>
         <BrowserRouter>
           <Navbar />
           <Routes>

             <Route path="/" element={<Home />} />
             <Route path="/product/:id" element={<ProductDetails />} />
             <Route path="/about" element={<About />} />
             <Route path = "/cart" element={<Cart />} />
           </Routes>
           <Footer />
         </BrowserRouter>
    </div>
  )
}

export default App