import { actions } from "./../actions";

const NavigationReducer = (state = "home", action) => {
    switch(action.type) {
        case actions.SET_PAGE:
            return action.payload
        default:
            return state
    }
}

export default NavigationReducer
