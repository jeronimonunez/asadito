import React, { useState } from 'react'
import logo from './logo.svg'
import Navegacion from './components/Navegacion'
import NoAsados from './components/NoAsados'

function App() {

  const [asaditos, setAsaditos] = useState([])

  return (
    <div className="App">
      <Navegacion></Navegacion>
      <div className="container">
        {asaditos.length ?
          <h2>We have some asados</h2>
          :
          <NoAsados />
        }
      </div>
    </div>
  )
}

export default App
