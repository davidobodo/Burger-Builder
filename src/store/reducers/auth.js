import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return updatedObject(state, { error: null, loading: true });
        case actionTypes.AUTH_SUCCESS:
            return updatedObject(state, {
                token: action.idToken,
                userId: action.userId,
                error: null,
                loading: false
            })
        case actionTypes.AUTH_FAIL:
            return updatedObject(state, {
                error: action.error,
                loading : false
            })
        default: return state;
    }
}

export default reducer