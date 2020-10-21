import React, { useState, useEffect } from "react"
import { Button, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap"
import { CartPlusFill, CartXFill } from "react-bootstrap-icons"

const ShoppingList = ({asadoShoppingList, setAsadoShoppingList, qty, addElement, editElement, removeElement}) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [guests, setGuests] = useState(qty)

    const handleFormSubmit = e => {
        e.preventDefault()
        setAsadoShoppingList([...asadoShoppingList, {name: name, price: price, id: Date.now()}])
        setName('')
        setPrice(0)
    }

    const handleChange = (event, setFunction) => {
        setFunction(event.target.value)
    }

    const getTotalPrice = () => {
        return asadoShoppingList.length !== 0 ? asadoShoppingList.reduce((accumulator, currentValue) => ({ price: parseFloat(accumulator.price) + parseFloat(currentValue.price) }))["price"] : 0
    }

    const getTotalDivided = () => {
        const result = getTotalPrice() / guests
        return result.toFixed(2)
    }

    const handleRemoveElement = (e, id) => {
        e.preventDefault()
        setAsadoShoppingList(asadoShoppingList.filter((current) => current.id !== id))
    }

    useEffect(() => {
        if(qty!==guests) setGuests(qty)
    }, [qty])

    return (
        <div className="shopping-list">
            <h4>Lista de compras</h4>
            {!!asadoShoppingList.length &&
                <ul>
                    {
                        asadoShoppingList.map((element) => (
                            <li key={element.id}>
                                <div>{element.name}</div>
                                <div className="price"><span>$</span> {element.price}</div>
                                <Button outline color="danger" onClick={e => handleRemoveElement(e, element.id)}><CartXFill /></Button>
                            </li>
                        ))
                    }
                </ul>
            }
            <div className="form">
                <FormGroup>
                    <Input type="text" name="name" value={name} placeholder="Nombre de la compra o la persona" onChange={e => handleChange(e, setName)} />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>$</InputGroupText>
                        </InputGroupAddon>
                        <Input type="number" name="price" value={price} onChange={e => handleChange(e, setPrice)} />
                    </InputGroup>
                    <Button color="primary" onClick={handleFormSubmit}><CartPlusFill /></Button>
                </FormGroup>
            </div>

            <div className="total">
                <span className="total-label">Total</span> 
                <span className="total-nr">
                    {getTotalPrice()}
                </span>
                <br/>
                <span className="total-divided">
                    Total x persona <span>$ {getTotalDivided()}</span>
                </span>
            </div>
        </div>
    )
}

export default ShoppingList