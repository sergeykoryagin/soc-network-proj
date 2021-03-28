import Posts from "./Posts/Posts.jsx"
import s from "./Profile.module.css"
import ProfileBackground from "./ProifileBackground/ProfileBackground";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileBackground src={props.src}/>
            <ProfileInfo />
            <Posts />
        </div>
    );
}

export default Profile;