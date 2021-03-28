import s from "./ProfileBackground.module.css"


const ProfileBackground = () => {
    return (
        <div className={s.profileBackground}>
            <img src={"https://i.pinimg.com/564x/8d/a1/c0/8da1c0443929ec2426d282d58e8a4755.jpg"}
                 alt={"profile background"}/>
        </div>
    );
}

export default ProfileBackground;