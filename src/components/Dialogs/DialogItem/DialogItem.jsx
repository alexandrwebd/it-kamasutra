import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import avatar from "./avatar.jpg";



const DialogItem = (props) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <div className={classes.dialogImg}>
                <img src={avatar} alt="" />
            </div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem
