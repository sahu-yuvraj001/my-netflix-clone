import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Border from './components/Border'
import Gallery from './components/Gallery'
import Reasons from './components/Reasons'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Border/>
      <Gallery/>
      <Reasons/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
