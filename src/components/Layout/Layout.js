import React, { Component } from 'react'

import Auxi from '../../hoc/Auxi'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer'

class Layout extends Component {
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler =() =>{
        this.setState({showSideDrawer:false})
    }


    //so that i dont affect the state directly
    sideDrawerToggleHandler =()=> {
        this.setState((prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer};
    });}

    render(){
        return(
            <Auxi>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxi>

        )
    }
}

export default Layout