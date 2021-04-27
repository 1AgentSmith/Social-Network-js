import React from 'react'
import ms from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={ms.Dialog + ' ' + ms.active}>
            <div className={ms.Dialog}>
                <NavLink to={path} activeClassName={ms.activeLink}>{props.name}</NavLink>
            </div>
        </div>
    )
}
export default DialogItem