import React from 'react'
import classes from './BuildControl.css'

const buildControl = (props) => {
    //output the label where it belongs
    //assign the various function calls to the clicks that would trigger them
    //if props.disabled is true, then disable the button
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick= {props.removed} disabled={props.disabled}>Less</button>
            <button className={classes.More} onClick= {props.added}>More</button>
        </div>
    )
}

export default buildControl