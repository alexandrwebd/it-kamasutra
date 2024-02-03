import avatar from './images.jpeg'
import classes from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <div className={classes.friendImg}>
                <img src={avatar} alt="Images"/>
            </div>
            <div className={classes.friendName}>
                {props.name}
            </div>
        </div>
    )
}

export default Friend