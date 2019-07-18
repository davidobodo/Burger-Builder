import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

//this constant was created so i can output the labels as the name
//the type is the same as our state so that we can pass that ingredient into the particular function
const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
]

const buildControls =(props) => {
    //receive all its props 
    //output the price here making sure it is always fixed to two decimal places
    //carry out a map function on the constant created above
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl 
                            key={ctrl.label} 
                            label={ctrl.label}
                            added={() => props.ingredientAdded(ctrl.type)}
                            removed={() => props.ingredientRemoved(ctrl.type)}
                            disabled={props.disabled[ctrl.type]}/>
            })}
            <button 
                className={classes.OrderButton}
                disabled= {!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    ) 
}

export default buildControls