import React from 'react'
import classes from './Button.css'

const button = (props) => {
    return (
        //join the two elements of the array with an empty string
        <button 
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}>{props.children}</button>
    )
}

export default button