import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios(orders)'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'


class ContactData extends Component{
    state = {
       orderForm:{
            name: {
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Your Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },
            street: {
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Street'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },
            zipCode: {
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Zipcode'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:5,
                    maxLength:5
                },
                valid:false

            },
            country: {
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Country'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false

            },
            email: {
                elementType: 'input',
                elementConfig:{
                    type:'email',
                    placeholder: 'Your E-Mail'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false

            },    
            deliveryMethod : {
                elementType: 'select',
                elementConfig:{
                    options:[
                        {value:'fastest', displayValue:'Fastest'},
                        {value:'Cheapest', displayValue:'Cheapest'}
                    ]
                },
                value:'',
            },
       },
       loading:false
    }

    checkValidity = (value, rules) => {
        let isValid = false;

        if(rules.required){
            isValid = value.trim() !== ''
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength
        }

        return isValid
    }

    orderHander =(e)=> {
        e.preventDefault();
        this.setState({loading:true})//so that i would see spinner
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;

        }
        const order ={
            ingredients:this.props.ingredients,
            price:this.props.price,
            orderData: formData
        }
        console.log(order)
        axios.post('/orders.json', order )
            .then(response => {
                //removes spinner and redirects page to '/' which is BurgerBuilder
                this.setState({loading:false})
                this.props.history.push('/');}
            )
            .catch(error =>
                this.setState({loading:false}));
    }

    inputChangeHandler =(e, inputIdentifier) => {
        const updatedOrderForm ={
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        updatedFormElement.value = e.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        console.log(updatedFormElement)
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    }


    render(){

        const formElementsArray =[];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            });
        }

        let form =(
            <form onSubmit={this.orderHander}>
                {formElementsArray.map(formElement => (
                   <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value}
                        changed={(e) => this.inputChangeHandler(e, formElement.id)}/>
                    ))}
                    <Button btnType="Success" >ORDER</Button>
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