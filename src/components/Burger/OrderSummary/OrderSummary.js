import React from 'react'
import Auxi from '../../../hoc/Auxi'
import Button from '../../UI/Button/Button'

const OrderSummary = (props)=> {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igkey => {
            return <li key={igkey}>
                    <span style={{textTransform: "capitalize"}}>{igkey}</span>: {props.ingredients[igkey]}
                    </li>
        })

    return(
        <Auxi>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxi>
    )
}
export default OrderSummary