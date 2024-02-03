import React, {useEffect} from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileThunk, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

// import {withRouter} from 'react-router-dom'

// function ProfileContainer(props) {
//     const { userId } = useParams();
//     let currUserId = userId||2
//
//     useEffect(() => {
//         axios
//             .get(`https://social-network.samuraijs.com/api/1.0/profile/` + currUserId)
//             .then((response) => {
//                 props.setUserProfile(response.data);
//             });
//     }, [userId]);
//
//     return (
//         <div>
//             <Profile profile={props.profile} />
//         </div>
//     );
// }
//
// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile,
// });
//
// export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
// App.js
// <Route  path = {'profile/:userId*'} element ={<ProfileContainer />} />


const ProfileContainer = (props) => {
    // componentDidMount() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
    //         this.props.setUserProfile(response.data)
    //     })
    // }
    let {userId} = useParams()
    let currUserId = userId ? userId : props.authorizedUserId
    // if (!userId) {
    //     props.history.push('/login')
    // }
    useEffect(() => {
        props.getUserProfileThunk(currUserId)
        props.getStatus(currUserId)
    }, [userId]);

    return (
        <div>
            <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        </div>
    );
        // return (
        //     <Profile {...this.props} profile={this.props.profile} />
        // )

}

// HOC

const mapStateToProps = (state) => ({
profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose(connect (mapStateToProps, {getUserProfileThunk, getStatus, updateStatus}),withAuthRedirect)(ProfileContainer)
