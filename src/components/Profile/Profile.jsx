import Posts from "./Posts/Posts.jsx"
import s from "./Profile.module.css"
import ProfileBackground from "./ProfileBackground/ProfileBackground";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Friends from "./Friends/Friends";
import NewPost from "./NewPost/NewPost";


const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileBackground/>
            <ProfileInfo/>
            <div className={s.wall}>
                <Friends/>
                <NewPost dispatch={props.dispatch}
                         newPostText={props.profilePage.newPostText}/>
                <Posts posts={props.profilePage.posts}/>
            </div>
        </div>
    );
}

export default Profile;