import s from "./Avatar.module.css"

const Avatar = (props) => {
    return (
        <img className={s.avatar} src={props.photos.large}/>
    )
}


export default Avatar;