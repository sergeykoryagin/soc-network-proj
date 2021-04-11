import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {


    let newMessageElement = React.createRef()

    let sendMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"})
    }

    let updateNewMessageText = () => {
        let text = newMessageElement.current.value
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text})
    }


    let dialogElements = props.dialogPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = props.dialogPage.messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea className={s.newMessageArea} ref={newMessageElement}
                          value={props.dialogPage.newMessageText} onChange={updateNewMessageText}/>
                <div className={s.sendButton}>
                    <span onClick={sendMessage}>send</span>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;