import actions from './actions'

export const addAsado = params => {
    return {
        type: actions.ADD_ASADO,
        payload: {
            title: params.title,
            date: params.date,
            address: params.address,
            qty: params.qty,
            id: params.id,
            asadoShoppingList: params.asadoShoppingList
        }
    }
}

export const editAsado = params => {
    return {
        type: actions.EDIT_ASADO,
        payload: {
            title: params.title,
            date: params.date,
            address: params.address,
            qty: params.qty,
            id: params.id,
            asadoShoppingList: params.asadoShoppingList
        }
    }
}

export const removeAsado = id => {
    return {
        type: actions.REMOVE_ASADO,
        payload: {
            id: id
        }
    }
}
