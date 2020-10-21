import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import NoAsados from './NoAsados'
import AsadosForm from './AsadosForm'
import { addAsado, editAsado, removeAsado, setPage, setFormVisible } from "./../store/actions"
import Steak from '../images/meat-steak.svg'
import Fire from '../images/fire.svg'
import { Trash, QuestionDiamond } from "react-bootstrap-icons"

const Asados = () => {
  const asados = useSelector(state => state.asados)
  const isFormVisible = useSelector(state => state.isFormVisible)
  
  const [asadoToEdit, setAsadoToEdit] = useState(null)
  
  const dispatch = useDispatch()

  const handleAddAsadoButtonClick = () => {
    dispatch(setFormVisible(true))
  }
  const saveAsado = asadazo => {
    dispatch(addAsado(asadazo))
    dispatch(setFormVisible(false))
  }
  const savedEditedAsado = asadazo => {
    dispatch(editAsado(asadazo))
    dispatch(setFormVisible(false))
    setAsadoToEdit(null)
  }
  const openEditAsado = asado => {
    dispatch(setFormVisible(true))
    setAsadoToEdit(asado)
  }
  const handleClickDelete = (e, id) => {
    e.stopPropagation()
    dispatch(removeAsado(id))
  }

  const handleGetHelp = e => {
    e.preventDefault()
    dispatch(setPage({page: 'ayuda'}))
  }
  
  return (
    <div className="asados-container">
    {!isFormVisible ?
      <>
      {asados.length ?
        <div className="fs">
        {/* Asados lists */}
        <ul className="asados-list">
        {asados.map((asado) => {
          return (
            <li className="asado-element" key={asado.id} onClick={() => openEditAsado(asado)}>
            <img src={Steak} alt="Steak icon" className="steak-icon"/>
            <div className="asado-element-content">
            <h2>{asado.title !== '' ? `${asado.title}` : `${asado.date}`}</h2>
            {asado.title.length > 0 && (<h3>{asado.date}</h3>)}
            </div>
            <Button outline color="danger" className="asado-element-delete" onClick={e => handleClickDelete(e, asado.id)}><Trash /></Button>
            </li>
            )    
          })}
          </ul>
          </div>
          :
          <NoAsados />
        }
        <div className="botonera">
          <Button onClick={handleGetHelp} color="warning"><QuestionDiamond className="icon-help" /></Button>
          <Button onClick={handleAddAsadoButtonClick} color="primary" className="nuevo-asado"><img src={Fire} alt="fire icon" /> <span>Organizar un nuevo asado</span></Button>
        </div>
        </>
        :
        <>
        <AsadosForm saveAsado={asadoToEdit ? savedEditedAsado : saveAsado} asadoToEdit={asadoToEdit} />
        </>
      }
      
      </div>
      )
    }
    
    export default Asados
