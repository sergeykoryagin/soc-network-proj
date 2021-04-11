import s from "./Photos.module.css";

const Photos = (props) => {
    return (
        <div className={s.photos}>
            <span className={s.spec}>photos</span>
            <span className={s.countPhotos}>6</span>
            <div className={s.userPhotos}>
                <div className={s.userPhoto + " " + s.photo1}></div>
                <div className={s.userPhoto + " " + s.photo2}></div>
                <div className={s.userPhoto + " " + s.photo3}></div>
                <div className={s.userPhoto + " " + s.photo4}></div>
                <div className={s.userPhoto + " " + s.photo5}></div>
            </div>
        </div>
    )
}


export default Photos;