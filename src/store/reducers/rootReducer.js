import orderReducer from './orderReducer'
import burgerBuilderReducer from './burgerBuilderReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
})

export default rootReducer