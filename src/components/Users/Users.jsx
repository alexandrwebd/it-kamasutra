
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div>
            <div>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                           pageSize={pageSize}/>
            </div>
            <div>
                {
                    users.map(u => <User user={u} followingInProgress={props.followingInProgress}
                                            unfollow={props.unfollow} follow={props.follow} key={u.id}/>)
                }
            </div>
        </div>)

    // const UsersSearchForm = () => {
    //     return (
    //         <div></div>
    //     )
    // }
}
export default Users