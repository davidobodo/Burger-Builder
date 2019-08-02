import React,{Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux'


class Checkout extends Component {
    //initialize state here...we are receiving the updated state from another component
   

    // //before the component mounts get these data from the url 
    // componentWillMount(){
    //     //new const
    //     //u have access to the location method since this component is in a route
    //     //from there, pick out the property value of the property search
    //     const query = new URLSearchParams(this.props.location.search);
    //       //initialize ingredient and price(local variables)
    //     let ingredients = {};
    //     let price =0
    //     //since query is a string(an iteratable object use for/of and not for/in (note: for/in is only for arrays i.e none iteratable objects))
    //     //initialize a variable Param
    //     //go through each element in query
    //     for (let param of query.entries()){
    //         if(param[0] === 'price'){
    //             price =param[1]
    //         }else{
    //             ingredients[param[0]] = +param[1];
    //         }
            
    //     } 
    //     this.setState({ingredients: ingredients, totalPrice:price})
    // }

    checkoutCancelledHandler =()=>{
        //goes to previos page
        this.props.history.goBack();
    }

    checkoutContinuedHandler =()=>{
        //goes to this url
        this.props.history.replace('/checkout/contact-data')
    }
    
    render(){

        //render was used in the route below so that i can pass some props down to the contactData component
        //the route was put here cos i want it to be in this page
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route 
                path={this.props.match.path + '/contact-data'} 
                // render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)}
                component={ContactData}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        ings:state.ingredients,
        price:state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout)