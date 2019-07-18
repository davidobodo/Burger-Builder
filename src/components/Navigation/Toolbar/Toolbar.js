import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
    return(
        //the desktoponly class is to make sure that the toolbar nav items dont show when in mobile view
            <header className={classes.Toolbar}>
                <DrawerToggle clicked={props.drawerToggleClicked}/>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                
                <nav className={classes.DesktopOnly}>
                    <NavigationItems/>
                </nav>
            </header>
       
    )
}

export default toolbar