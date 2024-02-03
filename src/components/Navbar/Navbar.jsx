import React from 'react'
import classes from './Navbar.module.css'
import NavItem from "./NavItem/NavItem";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    const navElement = props.state.sidebar.menu.map(menu => <NavItem key={menu.id} link={menu.link} rout={menu.rout} />)
  return (
    <nav className={classes.nav}>
        <div className={classes.navItem}>
            {
                navElement
            }
        </div>
        <div className={classes.navFriends}>
            <Friends friends={props.state.sidebar.friends} />
        </div>

    </nav>
  )
}

export default Navbar
