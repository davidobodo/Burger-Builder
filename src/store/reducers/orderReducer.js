import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updatedObject(action.orderData, { id: action.orderId })
    return updatedObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    })
}

const fetchOrdersSuccess = (state, action) => {
    return updatedObject(state, {
        loading: false,
        orders: action.orders
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return updatedObject(state, { purchased: false })
        case actionTypes.PURCHASE_BURGER_START:
            return updatedObject(state, { loading: true })
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action)
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updatedObject(state, { loading: false })
        case actionTypes.FETCH_ORDERS_START:
            return updatedObject(state, { loading: true })
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action)
        case actionTypes.FETCH_ORDERS_FAIL:
            return updatedObject(state, { loading: false })
        default:
            return state;
    }
}

export default reducer