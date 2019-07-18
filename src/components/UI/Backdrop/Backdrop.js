import React from 'react'
import classes from './Backdrop.css'

const backdrop = (props) => {
    return(
        //Note : this doesnt slide in, it just either displays or doesnt display
        props.show ? <div onClick={props.clicked} className={classes.Backdrop}></div> : null
    )
}

export default backdrop;