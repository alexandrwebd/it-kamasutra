import React from 'react'
import profileImg from './profile-img.jpg'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
  return (
    <div>
        <ProfileInfo profile={props.profile} img={profileImg} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
  )
}

export default Profile
