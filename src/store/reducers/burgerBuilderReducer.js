import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients : {
        salad:1,
        cheese:1,
        bacon:1,
        meat:1
    },
    totalPrice : 4,
    error : false
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
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.SET_INGREDIENT:
            return{
                ...state,
                ingredients : action.ingredients,
                totalPrice:4,
                error : false
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return{
                ...state,
                error : true
            }
        default:
            return state;
    }
};

export default reducer;