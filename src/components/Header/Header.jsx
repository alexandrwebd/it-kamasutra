import React from 'react'
import classes from './Header.module.css'
import logo from './logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.headerLogo}>
        <img src={logo} alt="Images" />
      </div>
        <div className={classes.loginBlock}>
            {props.isAuth ? (props.userAvatar ? <div>{props.userAvatar} - <button onClick={props.logout}>Log out</button> </div> : <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>) : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
  )
}

export default Header
