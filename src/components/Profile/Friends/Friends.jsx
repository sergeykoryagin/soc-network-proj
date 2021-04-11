import s from "./Friends.module.css";

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <span>friends</span>
            <span className={s.countFriends}>146</span>
            <ul className={s.friendsPreview}>
                <li className={s.photo + " " + s.photo1}>

                </li>
                <li className={s.photo + " " + s.photo2}>

                </li>
                <li className={s.photo + " "  + s.photo3}>

                </li>
                <li className={s.photo + " "   + s.photo4}>

                </li>
                <li className={s.photo + " "  + s.photo5}>

                </li>
                <li className={s.photo + " "  + s.photo6}>

                </li>
            </ul>
        </div>
    )
}

export default Friends;