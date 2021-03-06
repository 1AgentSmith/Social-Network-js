import React from "react";
import ps from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={ps.Profile}>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData} addPost={props.addPost}/>
        </div>
    )
}


export default Profile;