import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/home'
import ProductPage from './components/Productpage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
