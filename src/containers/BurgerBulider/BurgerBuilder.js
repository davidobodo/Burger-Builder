import React, {Component} from 'react';
import Auxi from '../../hoc/Auxi'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/rootActions'
import axios from '../../axios(orders)'


class BurgerBuilder extends Component{
    //the amount of each ingredient present in the burger
    state={
        //sole aim of purchaseable is to enable the ORDER NOW button
        purchasing: false
    }

    componentDidMount () {
        this.props.onFetchIngredients();
    }


    //Responsible for altering purchaseable
    updatePurchaseState =(ingredients)=>{
        const sum = Object.keys(ingredients)//converts object into an array of its keys(i.e name of each ingredient) and gives each an index 
            .map(igKey => {//igkey is the name of each ingredient
                
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    //once this is triggered some css property for modal and backdrop would be changed
    purchaseHandler = () => {
        if(this.props.isAuthenticated){
            this.setState({purchasing: true});
        }else{
            this.props.history.push({
                pathname: '/auth'
            })
        }
    }
    //exact opposite of the above function
    purchaseCancelHandler =() => {
        this.setState({purchasing:false})
    }

    purchaseContinueHandler =() => { 
        this.props.onInitPurchase(); 
        this.props.history.push({
                pathname: '/checkout'
            })
    } 


    render(){

        //pass all the states into a new constant cause we want to improve the user interface
        //This improvement is such that the button will be disabled when clicking it might become an error(even though we have solved this error)
        const disabledInfo ={
            ...this.props.ings
        };

        for(let key in disabledInfo){
        //this would either retu3rn true or false
        //the key is the property value of the property name...i.e The number of each ingredient in my state
        //this gets run four times for each of the ingredients
        //if the key(i.e amount of that ingredient) fufills the below condition then it returns true
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;

        let burger = this.props.error ? <h1>Ingredients cant be loaded </h1> :<Spinner/>
        if(this.props.ings){
            burger =  <Auxi>
                        <Burger ingredients={this.props.ings}/>
                        <BuildControls 
                            ingredientAdded={this.props.onIngredientAdded}
                            ingredientRemoved={this.props.onIngredientRemoved}
                            disabled={disabledInfo}
                            purchasable={this.updatePurchaseState(this.props.ings)}
                            ordered={this.purchaseHandler}
                            isAuth={this.props.isAuthenticated}
                            price={this.props.price}/>
                    </Auxi>
            orderSummary = <OrderSummary 
                            price={this.props.price}
                            ingredients={this.props.ings}
                            purchaseCanceled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler}/>        
        }
        

        

        //passed the above mentioned functions and state as props into buildControls
        return(
            <Auxi>
                <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxi>
        )
    }
}

const mapStateToProps = state => {
    return{
        ings : state.burgerBuilder.ingredients,
        price : state.burgerBuilder.totalPrice,
        error : state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded : (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved : (ingName) => dispatch(actions.removeIngredient(ingName)),
        onFetchIngredients : () => dispatch(actions.fetchIngredients()),
        onInitPurchase : () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))