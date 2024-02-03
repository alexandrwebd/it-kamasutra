import React from 'react'
import Friend from "./Friend/Friend";
import classes from './Friends.module.css'

const Friends = (props) => {
    const friendsElement = props.friends.map(friend =>  <Friend key={friend.id} name={friend.name} />)
  return (
    <div className={classes.friends}>
        <div className={classes.friendsLink}>
            Friends
        </div>
        <div className={classes.friendsList}>
            {friendsElement}
        </div>
    </div>

  )
}

export default Friends
