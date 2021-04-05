import React from "react";
import pps from './Post.module.css'

const Post = (props) => {
    return(
        <div className={pps.Post}>
            <img src='https://cdn.optipic.io/site-539/upload/iblock/3cf/3cf9c4690bf2010f649a0ad35d80763f.jpg'/>
            <span>{props.message}</span>
            <div>
                {props.name} {props.age}
            </div>
        </div>
    )
}

export default Post