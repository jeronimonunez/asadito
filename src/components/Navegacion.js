import React from 'react'
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarText
} from 'reactstrap'
import Logo from '../images/bonfire.svg'
import { useDispatch } from "react-redux"
import { setFormVisible, setPage } from "./../store/actions"

const Navegacion = () => {
  const dispatch = useDispatch()

  const handleGoHome = e => {
    e.preventDefault()
    dispatch(setPage({page: 'home'}))
    dispatch(setFormVisible(false))
  }

  const handleGoHelp = e => {
    e.preventDefault()
    dispatch(setPage({page: 'ayuda'}))
  }
  
  return (
    <Navbar color="light" light expand="md" className="asadito-navbar">
      <NavbarBrand href="/" onClick={handleGoHome}><img src={Logo} className="logo" /> Asadito</NavbarBrand>
      
      <Button color="link" onClick={handleGoHelp}>?</Button>
      <NavbarText>Say hi!</NavbarText>
    </Navbar>
  )
}
  
export default Navegacion
