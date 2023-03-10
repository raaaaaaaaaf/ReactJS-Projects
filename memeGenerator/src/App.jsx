import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Meme from './components/Meme'
import './style.css'

function App() {


  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  )
}

export default App
