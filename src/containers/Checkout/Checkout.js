import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'


class Checkout extends Component {

    checkoutCancelledHandler = () => {
        //goes to previos page
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        //goes to this url
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        let summary = <Redirect to="/" />

        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null
            summary =   <div>
                            {purchasedRedirect}
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
        }
        //render was used in the route below so that i can pass some props down to the contactData component
        //the route was put here cos i want it to be in this page
        return summary
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased
    }
}



export default connect(mapStateToProps)(Checkout)