import React from "react"

function Navbar() {

  return (
    <header>
      <nav className="nav">
          <img src="./src/assets/react.svg" className="nav--icon"/>
          <h3 className="nav--tittle">ReactFacts</h3>
          <h4 className="nav--text">React Course - Project 1</h4>
      </nav>
    </header>
  )
}

export default Navbar