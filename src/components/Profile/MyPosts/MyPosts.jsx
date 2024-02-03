import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import AddPostForm from "./AddPostForm";

const MyPosts = React.memo(props => {
    const postsElement = props.posts.map(post => <Post key={post.id} message={post.message}
                                                       like={post.likesCount}/>)


    const addNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={classes.postsBlock}>

            <AddPostForm onSubmit={addNewPost}/>

            <div className={classes.postsTitle}>New post</div>
            <div className={classes.posts}>
                {
                    postsElement
                }
            </div>
        </div>
    )
});

export default MyPosts
