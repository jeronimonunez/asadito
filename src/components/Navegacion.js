import React, {useState} from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarText
  } from 'reactstrap'
import Logo from '../images/bonfire.svg'

const Navegacion = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color="light" light expand="md" className="asadito-navbar">
          <NavbarBrand href="/"><img src={Logo} className="logo" /> Asadito</NavbarBrand>
          
          <NavbarText>Simple Text</NavbarText>
          
        </Navbar>
    )
}

export default Navegacion