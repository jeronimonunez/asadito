import { actions } from "./../actions";

const HomeNavigationReducer = (state = false, action) => {
    console.log(action, state)
    switch(action.type) {
        case actions.SET_FORM_VISIBLE:
            return action.payload
        default:
            return state
    }
}

export default HomeNavigationReducer
