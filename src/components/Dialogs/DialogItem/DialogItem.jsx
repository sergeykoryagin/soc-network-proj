import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
