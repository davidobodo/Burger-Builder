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
    componentDidMount(){
        axios.get('/orders.json')
            .then(res =>{
                const fetchedOrders =[];
                //key is the id
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id:key
                    });
                    console.log(res.data)
                }
                this.setState({loading:false, orders:fetchedOrders});
            })
            .catch(err => {
                this.setState({loading:false});
            })
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