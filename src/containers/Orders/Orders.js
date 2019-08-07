import React,{ Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios(orders)'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/rootActions'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component{
    //Note that anything that is dynamic in a page has to be in a state, so that it can  change...hence the initialization of this state

    componentDidMount(){
        this.props.onFetchOrders();
    }
    

    render(){
        let orders = <Spinner/>
        if(!this.props.loading){
            orders = this.props.orders.map(order => ( 
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>//adding + here is another option for turning the string price into a number(although i already used number.parsefloat in  the order component to do that)
                ))
            
        }
        return orders   
    }
}

const mapStateToProps = state => {
    return{
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchOrders : () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios))