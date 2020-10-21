import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import NoAsados from './NoAsados'
import AsadosForm from './AsadosForm'
import { addAsado, editAsado, removeAsado } from "./../store/actions"
import Steak from '../images/meat-steak.svg'
import { Trash } from "react-bootstrap-icons";

const Asados = () => {
    const asados = useSelector(state => state.asados)
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [asadoToEdit, setAsadoToEdit] = useState(null)
    const dispatch = useDispatch()
    const handleAddAsadoButtonClick = () => {
        setIsFormVisible(true)
    }
    const saveAsado = asadazo => {
        dispatch(addAsado(asadazo))
        setIsFormVisible(false)
    }
    const savedEditedAsado = asadazo => {
        dispatch(editAsado(asadazo))
        setIsFormVisible(false)
        setAsadoToEdit(null)
    }
    const openEditAsado = asado => {
        setIsFormVisible(true)
        setAsadoToEdit(asado)
    }
    const handleClickDelete = (e, id) => {
        e.stopPropagation()
        dispatch(removeAsado(id))
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
                        <Button onClick={handleAddAsadoButtonClick}>Add</Button>
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