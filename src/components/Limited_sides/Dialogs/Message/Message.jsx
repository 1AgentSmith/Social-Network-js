import ms from "./../Dialogs.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={ms.Message}>{props.message}</div>
    )
}

export default Message