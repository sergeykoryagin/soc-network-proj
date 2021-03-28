import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: "1", name: "Artem"},
        {id: "2", name: "Parahat"},
        {id: "3", name: "Ramil"},
        {id: "4", name: "Anton"},
        {id: "5", name: "Timur"},
        {id: "6", name: "Ildar"}
    ]

    let messages = [
        {id: "1", message: "privet Sergey)"},
        {id: "2", message: "Privet)"},
        {id: "3", message: "kak dela?"},
        {id: "4", message: "Otlichno"},
        {id: "5", message: "u tebya kak?"},
        {id: "6", message: "horosho"},
        {id: "7", message: "Sergey esli mozhno u menya pros'ba est'"},
        {id: "8", message: "u nas segodnya kontrol'niy po diffira"}
    ]

    let dialogElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;