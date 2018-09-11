import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import dashboard from './dashboardReducer'
import contact from './contactReducer'
import window from './windowReducer'
import unauth from './unauthReducer'
import datasets from './datasetReducer'
import authentication from './authReducer'
import information from './informationReducer'


const rootReducer = combineReducers({
    dashboard,
    authentication,
    contact,
    window,
    unauth,
    datasets,
    information,
    routing: routerReducer
})

export default rootReducer