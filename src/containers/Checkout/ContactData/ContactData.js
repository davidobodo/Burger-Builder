import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios(orders)'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'


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
                //removes spinner and redirects page to '/' which is BurgerBuilder
                this.setState({loading:false})
                this.props.history.push('/');}
            )
            .catch(error =>
                this.setState({loading:false}));
    }


    render(){
        let form =(
            <form>
                    <Input inputtype="input"  type='text' name='name' placeholder='Your Name'/>
                    <Input inputtype="input" type='email' name='email' placeholder='Your Email'/>
                    <Input inputtype="input" type='text' name='street' placeholder='Street'/>
                    <Input inputtype="input" type='text' name='postal' placeholder='Postal Code'/>
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