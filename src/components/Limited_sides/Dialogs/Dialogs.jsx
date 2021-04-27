import React from 'react'
import ms from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";


const Dialogs = (props) => {

    let DialogElements = props.DialogData.map( d => <DialogItem name={d.name} id = {d.id}/>)
    let MessageElements = props.MessagesData.map( m => <Message message={m.messages}/>)

    return (
        <div className={ms.Dialogs}>
            <div className={ms.Dialog_items}>
                {DialogElements}
            </div>
            <div className={ms.Messages}>
                {MessageElements}
            </div>
        </div>
    )
}

export default Dialogs