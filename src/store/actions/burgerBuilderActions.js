import * as actionTypes from './actionTypes'
import axios from '../../axios(orders)'


export const fetchIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
        .then( response =>{
            console.log(response)
            dispatch(setIngredients(response.data))
        })
        .catch(error => {
            dispatch(fetchIngredientsFailed())
        })
    }
}

export const setIngredients = (ingredients)=> {
    return{
        type: actionTypes.SET_INGREDIENT,
        ingredients : ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return{
        type : actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const addIngredient = (name) => {
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}



