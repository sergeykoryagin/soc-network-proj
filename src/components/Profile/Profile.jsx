import Posts from "./Posts/Posts.jsx"
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={"https://i.pinimg.com/564x/37/99/a7/3799a7cee36fb4bd6cd88bef2ef83334.jpg"}
                    alt={"main content"} />
            </div>
            <div>
                avatar + description
            </div>
            <Posts />
        </div>
    );
}

export default Profile;