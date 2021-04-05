import React from "react";
import ps from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={ps.Profile}>
            <div>
                <img src='https://www.noroctech.com/wp-content/uploads/2020/10/webdes2.jpg'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}


export default Profile;