import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import dashboard from './dashboardReducer'

const rootReducer = combineReducers({
    dashboard,
    routing: routerReducer
})

export default rootReducer