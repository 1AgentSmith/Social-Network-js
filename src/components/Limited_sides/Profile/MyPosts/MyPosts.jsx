import React from "react";
import ps from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <Post name='Valerii,' age='24' message='Hey, how are you?'/>
            <Post name='Vadim,' age='22' message='It`s my first post'/>
            <Post/>
        </div>
    )
}

export default MyPosts