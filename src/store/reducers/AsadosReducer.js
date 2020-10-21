import { actions } from "./../actions";

const AsadosReducer = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_ASADO:
            return [...state, action.payload]
        case actions.EDIT_ASADO:
            let newState = state
            newState.forEach((current, index) => {
                if (current.id === action.payload.id) newState[index] = action.payload
            })
            return newState
        case actions.REMOVE_ASADO:
            return state.filter((current) => current.id !== action.payload.id)
        default:
            return state
    }
}

export default AsadosReducer