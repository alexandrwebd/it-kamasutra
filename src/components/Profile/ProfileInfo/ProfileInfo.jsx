import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            {/*<div className={classes.profileImg}>*/}
            {/*    <img src={props.img} alt="Images" />*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt="Images"/>
                <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus}/>
                <div>
                    <h3>About Me:</h3>
                    <div>Mu name is {props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                    <div>
                        <div>looking for a job: <span>{props.profile.lookingForAJob ? 'Yes' : 'No'}</span></div>
                        <div>A Job Description: <span>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Not a Job'}</span></div>
                    </div>
                </div>
                <div>
                    <h3>Mu Contacts:</h3>
                    <ul>
                        <li>
                            <span>facebook: </span><span>{props.profile.contacts.facebook ? props.profile.contacts.facebook : 'Пока нету'}</span>
                        </li>
                        <li>
                            <span>website: </span><span>{props.profile.contacts.website ? props.profile.contacts.website : ' Пока нету'}</span>
                        </li>
                        <li>
                            <span>vk: </span><span>{props.profile.contacts.vk ? props.profile.contacts.vk : ' Пока нету'}</span>
                        </li>
                        <li>
                            <span>twitter: </span><span>{props.profile.contacts.twitter ? props.profile.contacts.twitter : ' Пока нету'}</span>
                        </li>
                        <li>
                            <span>instagram: </span><span>{props.profile.contacts.instagram ? props.profile.contacts.instagram : ' Пока нету'}</span>
                        </li>
                        <li>
                            <span>youtube: </span><span>{props.profile.contacts.youtube ? props.profile.contacts.youtube : ' Пока нету'}</span>
                        </li>
                        <li>
                            <span>github: </span><span>{props.profile.contacts.github ? props.profile.contacts.github : ' Пока нету'}</span>
                        </li>
                        <li>
                            <span>mainLink: </span><span>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : ' Пока нету'}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo
