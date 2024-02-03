import React from 'react'
import classes from './Post.module.css'
import avatar from './avatar.jpg'

const Post = (props) => {
  return (
    <div className={classes.postItem}>
      <div className={classes.postImg}>
        <img src={avatar} alt="" />
      </div>
      <div className={classes.postText}>{props.message}</div>
      <div className={classes.postLike}>like {props.like}</div>
    </div>
  )
}

export default Post
