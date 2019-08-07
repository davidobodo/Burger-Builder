import React,{ Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios(orders)'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component{
    //Note that anything that is dynamic in a page has to be in a state, so that it can  change...hence the initialization of this state
    state={
        orders: [],
        loading:true
    }
    

    render(){
        return(
            <div>
                {this.state.orders.map(order => (
                    
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>//adding + here is another option for turning the string price into a number(although i already used number.parsefloat in  the order component to do that)
                ))}
            </div>

        )   
    }
}

export default withErrorHandler(Orders, axios)