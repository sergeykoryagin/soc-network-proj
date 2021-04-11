import s from "./ProfileInfo.module.css";
import UserLinks from "./UserLinks/UserLinks";
import InfoArea from "./InfoArea/InfoArea";
import Avatar from "./Avatar/Avatar"


const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <UserLinks />
            <Avatar />
            <div className={s.profileButtons}>
                <div className={s.editButton}>
                    <a href={"#"}>edit</a>
                </div>
                <div className={s.addPhotoButton}>
                    <a href={"#"}>add new photo</a>
                </div>
            </div>
            <InfoArea />
        </div>
    );
}

export default ProfileInfo;