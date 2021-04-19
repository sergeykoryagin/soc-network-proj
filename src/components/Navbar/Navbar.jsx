import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.menuList}>
                <li className={s.item}>
                    <NavLink to={"/profile"} activeClassName={s.active}>profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={"/dialogs"} activeClassName={s.active}>dialogs</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={"/friends"} activeClassName={s.active}>friends</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={"/news"} activeClassName={s.active}>news</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={"/music"} activeClassName={s.active}>music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={"/users"} activeClassName={s.active}>users</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar