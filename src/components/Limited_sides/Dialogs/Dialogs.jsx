import React from 'react'
import ms from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";


const Dialogs = (props) => {
    let DialogElements = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let MessageElements = props.state.messageData.map(m => <Message message={m.message}/>)

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