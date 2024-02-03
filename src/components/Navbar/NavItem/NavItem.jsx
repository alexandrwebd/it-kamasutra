import React from 'react'
import classes from './NavItem.module.css'
import {Link, NavLink} from "react-router-dom";

const NavItem = (props) => {
  return (
      <div className={classes.item}>
        <NavLink to={props.rout} className={classes.link} activeclassname={classes.active}>{props.link}</NavLink>
      </div>
  )
}

export default NavItem
