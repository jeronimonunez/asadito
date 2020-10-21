import {combineReducers} from 'redux'
import AsadosReducer from './AsadosReducer'

const allReducers = combineReducers({
    asados: AsadosReducer
})

export default allReducers