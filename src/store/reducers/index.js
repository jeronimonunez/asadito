import {combineReducers} from 'redux'
import AsadosReducer from './AsadosReducer'
import NavigationReducer from "./NavigationReducer"
import HomeNavigationReducer from "./HomeNavigationReducer"

const allReducers = combineReducers({
    asados: AsadosReducer,
    page: NavigationReducer,
    isFormVisible: HomeNavigationReducer
})

export default allReducers
