import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    const sendMessage = () => {
        props.addMessage()
    };

    const updateNewMessageText = (e) => {
        const text = e.target.value
        props.updateNewMessageText(text)
    };


    const dialogElements = props.dialogs.map((d) => <DialogItem id={d.id} name={d.name} key={d.id}/>);
    const messageElements = props.messages.map((m) => <Message id={m.id} message={m.message} key={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea
                    className={s.newMessageArea}
                    value={props.newMessageText}
                    onChange={updateNewMessageText}
                />
                <div className={s.sendButton}>
                    <span className={s.sendMessage} onClick={sendMessage}>send</span>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
