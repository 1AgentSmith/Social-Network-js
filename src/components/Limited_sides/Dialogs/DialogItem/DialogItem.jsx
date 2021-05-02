import React from 'react'
import ms from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={ms.Dialog + ' ' + ms.active}>
            <div className={ms.Dialog}>
                <NavLink to={path} activeClassName={ms.activeLink}>
                    <img src="https://cdn.optipic.io/site-539/upload/iblock/3cf/3cf9c4690bf2010f649a0ad35d80763f.jpg"/>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
}
export default DialogItem