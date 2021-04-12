import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    const newMessageElement = React.createRef();

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    const updateNewMessageText = () => {
        const text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };


    const dialogElements = props.dialogPage.dialogs.map((d) => <DialogItem id={d.id} name={d.name}/>);
    const messageElements = props.dialogPage.messages.map((m) => <Message id={m.id} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea
                    className={s.newMessageArea}
                    ref={newMessageElement}
                    value={props.dialogPage.newMessageText}
                    onChange={updateNewMessageText}
                />
                <div className={s.sendButton}>
                    <span className={s.sendMessage} onClick={addMessage}>send</span>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
