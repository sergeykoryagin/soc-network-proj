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

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id={"1"} name={"Artem"}/>
                <DialogItem id={"2"} name={"Parahat"}/>
                <DialogItem id={"3"} name={"Ramil"}/>
                <DialogItem id={"4"} name={"Anton"}/>
                <DialogItem id={"5"} name={"Timur"}/>
                <DialogItem id={"6"} name={"Ildar"}/>
            </div>
            <div className={s.messages}>
                <Message message={"privet Sergey)"}/>
                <Message message={"Privet)"}/>
                <Message message={"kak dela?"}/>
                <Message message={"Otlichno!"}/>
                <Message message={"u tebya kak?"}/>
                <Message message={"horosho"}/>
                <Message message={"Sergey esli mozhno u menya pros'ba est'"}/>
                <Message message={"u nas segodnya kontrol'niy po diffira"}/>
            </div>
        </div>
    );
}

export default Dialogs;