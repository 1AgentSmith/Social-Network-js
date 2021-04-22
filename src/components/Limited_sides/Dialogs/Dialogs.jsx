import React from 'react'
import ms from './Dialogs.module.css'
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

const Message = (props) => {
    return (
        <div className={ms.Message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={ms.Dialogs}>
            <div className={ms.Dialog_items}>
                <DialogItem name='Vlad' id='1'/>
                <DialogItem name='Max' id='2'/>
                <DialogItem name='Aleksandra' id='3'/>
                <DialogItem name='Julia' id='4'/>
                <DialogItem name='Lipa' id='5'/>
                <DialogItem name='Illa' id='6'/>
            </div>
            <div className={ms.Messages}>
                <Message message='Hey'/>
                <Message message='What`s up'/>
                <Message message='How are you?'/>
            </div>
        </div>
    )
}

export default Dialogs