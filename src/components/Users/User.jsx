import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            {
                // <div key={Math.floor(Math.random() * user.id)}>
                <div>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img className={styles.userPhoto}
                                         src={user.photos.small != null ? user.photos.small : userPhoto} alt="Images"/>
                                </NavLink>

                            </div>
                            <div>
                                {
                                    user.followed
                                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                                  onClick={() => {
                                                      unfollow(user.id)
                                                  }}>Unfollow</button>
                                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                                  onClick={() => {
                                                      follow(user.id)
                                                  }}>Follow</button>
                                }
                            </div>
                        </span>
                    <span>
                            <span>
                                <div>{user.name}</div> <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </span>
                        </span>
                </div>
            }
        </div>)
}
export default User