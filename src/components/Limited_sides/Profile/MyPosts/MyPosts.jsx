import React from "react";
import ps from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.postData.map(p => <Post name={p.name} age={p.age} message={p.message}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }


    return (
        <div>
            <div className={ps.textposts}>
                <h3> My posts </h3>
            </div>
            <div className={ps.inputpost}>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts