import s from "./UserLinks.module.css"

const UserLinks = (props) => {
    return (
        <div className={s.links}>
            <ul>
                <li className={s.item + ' ' + s.tg}>
                    <a href={"#"}></a>
                </li>
                <li className={s.item + ' ' + s.vk}>
                    <a href={"#"}></a>
                </li>
                <li className={s.item + ' ' + s.steam}>
                    <a href={"#"}></a>
                </li>
                <li className={s.item + ' ' + s.inst}>
                    <a href={"#"}></a>
                </li>
                <li className={s.item + ' ' + s.tw}>
                    <a href={"#"}></a>
                </li>
                <li className={s.item + ' ' + s.yt}>
                    <a href={"#"}></a>
                </li>
            </ul>
        </div>
    )
}


export default UserLinks;