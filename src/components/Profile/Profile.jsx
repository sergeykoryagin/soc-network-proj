import s from "./Profile.module.css"
import ProfileBackground from "./ProfileBackground/ProfileBackground";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Friends from "./Friends/Friends";
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";
import Loader from "../common/Loader";


const Profile = (props) => {
    if (!props.profile)
        return <Loader/>
    return (
        <div className={s.profile}>
            <ProfileBackground/>
            <ProfileInfo profile={props.profile}/>
            <div className={s.wall}>
                <Friends/>
                <NewPostContainer/>
                <PostsContainer/>
            </div>
        </div>
    );
}

export default Profile;