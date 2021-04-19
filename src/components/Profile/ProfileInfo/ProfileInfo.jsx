import s from "./ProfileInfo.module.css";
import UserLinks from "./UserLinks/UserLinks";
import InfoArea from "./InfoArea/InfoArea";
import Avatar from "./Avatar/Avatar"


const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <UserLinks contacts={props.profile.contacts}/>
            <Avatar photos={props.profile.photos}/>
            <div className={s.profileButtons}>
                <div className={s.editButton}>
                    <a href={"#"}>edit</a>
                </div>
                <div className={s.addPhotoButton}>
                    <a href={"#"}>add new photo</a>
                </div>
            </div>
            <InfoArea aboutMe={props.profile.aboutMe} fullName={props.profile.fullName}/>
        </div>
    );
}

export default ProfileInfo;