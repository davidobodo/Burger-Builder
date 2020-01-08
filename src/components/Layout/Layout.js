import React, { Component } from 'react'

import { connect } from 'react-redux'

import Auxi from '../../hoc/Auxi'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }


    //so that i dont affect the state directly
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Auxi>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxi>

        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout)