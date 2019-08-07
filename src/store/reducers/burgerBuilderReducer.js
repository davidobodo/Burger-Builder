import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    ingredients: {
        salad: 1,
        cheese: 1,
        bacon: 1,
        meat: 1
    },
    totalPrice: 4,
    error: false
    // pueshaseable: false, //i can still use this to updat my order button
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.8,
    bacon: 0.7,
    meat: 1.2
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
            const updatedIngredients = updatedObject(state.ingredients, updatedIngredient)
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updatedObject(state, updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
            const updatedIngs = updatedObject(state.ingredients, updatedIng)
            const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
            return updatedObject(state, updatedSt);
        case actionTypes.SET_INGREDIENT:
            return updatedObject(state, {
                ingredients: action.ingredients,
                totalPrice: 4,
                error: false
            })
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updatedObject( state, {error: true})
        default:
            return state;
    }
};

export default reducer;