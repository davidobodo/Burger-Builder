import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios(orders)'
import Spinner from '../../../components/UI/Spinner/Spinner'


class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading:false
    }

    orderHander =(e)=> {
        e.preventDefault();
        console.log(this.props.ingredients)

         this.setState({loading:true})//so that i would see spinner
        
        const order ={
            ingredients:this.props.ingredients,
            price:this.props.price,
            customer : {
                name: 'Obodo David',
                address:{
                    street: 'RCCG camp',
                    zipCode: '12345',
                    country: 'Nigeria'
                },
                email: 'obodo@test.com'    
                },
            deliveryMethod : 'fastest'
        }
        axios.post('/orders.json', order )
            .then(response => {
                this.setState({loading:false})
                this.props.history.push('/');}
            )
            .catch(error =>
                this.setState({loading:false}));
    }


    render(){
        let form =(
            <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Your Name'/>
                    <input className={classes.Input} type='email' name='email' placeholder='Your Email'/>
                    <input className={classes.Input} type='text' name='street' placeholder='Street'/>
                    <input className={classes.Input} type='text' name='postal' placeholder='Postal Code'/>
                    <Button btnType="Success" clicked={this.orderHander}>ORDER</Button>
                </form>
        );
        if(this.state.loading){
            form=<Spinner/>;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData