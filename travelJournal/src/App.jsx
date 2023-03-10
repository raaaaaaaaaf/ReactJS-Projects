import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Data from './components/Data'
import './style.css'

function App() {

  const mainElements = Data.map(item =>
    <Hero 
      key = {item.id}
      item = {item}
    />
    )
  return (
    <div className="App">
      <Navbar />
      {mainElements}
    </div>
  )
}

export default App
