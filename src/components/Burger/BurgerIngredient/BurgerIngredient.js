import React, {Component} from 'react'
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component{
    render(){
        //initially no ingredient
        //this is exactly like a reducer. It returns any of this depending on what was added or removed
        let ingredient= null;

        switch(this.props.type){
            case( 'bread-bottom' ):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case( 'bread-top' ):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ( 'salad' ):
                ingredient = <div className={classes.Salad}></div>;
                break;
            default:
                ingredient = null;
            
        }
        return ingredient
    }
}


//first property of PropType says it must be a string while second property says this must be used
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}
    

export default BurgerIngredient