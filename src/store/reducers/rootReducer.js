import orderReducer from './orderReducer'
import burgerBuilderReducer from './burgerBuilderReducer'
import authReducer from './auth'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth : authReducer
})

export default rootReducer