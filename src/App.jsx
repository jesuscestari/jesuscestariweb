import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
