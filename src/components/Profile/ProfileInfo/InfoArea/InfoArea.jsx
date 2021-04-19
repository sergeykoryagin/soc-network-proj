import s from "./InfoArea.module.css"
import Photos from "../Photos/Photos";

const InfoArea = (props) => {
    return (
        <div className={s.infoArea}>
            <span className={s.userName}>{props.fullName}</span>
            <div className={s.description}>
                <span className={s.spec}>about me</span>
                <p className={s.userDescription}>{props.aboutMe}</p>
            </div>
            <div className={s.birthday}>
                <span className={s.spec}>birthday</span>
                <span className={s.userBirthday}>07.10.2000</span>
            </div>
            <div className={s.city}>
                <span className={s.spec}>city</span>
                <span className={s.userCity}>Kazan</span>
            </div>
            <Photos />
        </div>
    )
}


export default InfoArea;