import React, { useState } from 'react'
import Navegacion from './components/Navegacion'
import Asados from './components/Asados'
import Ayuda from "./components/Ayuda";
import { useSelector } from 'react-redux'


function App() {

  const page = useSelector(state => state.page)

  return (
    <div className="App">
      <Navegacion></Navegacion>
      {page === "home" && <Asados />}
      {page === "ayuda" && <Ayuda />}
    </div>
  )
}

export default App
