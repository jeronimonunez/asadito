import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import ShoppingList from "./ShoppingList"


const AsadosForm = ({saveAsado, asadoToEdit}) => {

    const now = new Date()

    const [title, setTitle] = useState(asadoToEdit ? asadoToEdit.title : '')
    const [datetime, setDatetime] = useState(asadoToEdit ? asadoToEdit.date : now.toISOString().split('.')[0])
    const [address, setAddress] = useState(asadoToEdit ? asadoToEdit.address : '')
    const [qty, setQty] = useState(asadoToEdit ? asadoToEdit.qty : 1)

    const handleInputChange = (event, setFunction) => {
        setFunction(event.target.value)
        console.log(event.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const newId = Date.now()

        saveAsado({
            id: asadoToEdit ? asadoToEdit.id : newId,
            title: title,
            date: datetime,
            address: address,
            qty: qty
        })
    }

    return (
        <Form className="asados-form" onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="title">Titulo</Label>
                <Input type="text" name="title" placeholder="Asado en lo de Rodrigo" value={title} onChange={e => handleInputChange(e, setTitle)}></Input>
            </FormGroup>
            
            <FormGroup>
                <Label for="datetime">Fecha y hora</Label>
                <Input type="datetime-local" name="datetime" value={datetime} onChange={e => handleInputChange(e, setDatetime)}></Input>
            </FormGroup>

            <FormGroup>
                <Label for="address">Lugar</Label>
                <Input type="text" name="address" value={address} onChange={e => handleInputChange(e, setAddress)}></Input>
            </FormGroup>

            <FormGroup>
                <Label for="qty">Cantidad de invitados</Label>
                <Input type="number" name="qty" value={qty} onChange={e => handleInputChange(e, setQty)}></Input>
            </FormGroup>

            <Button type="submit">Guardar</Button>

            <ShoppingList />
        </Form>
    )
}

export default AsadosForm