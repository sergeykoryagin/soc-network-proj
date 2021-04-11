import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.userAvatar}>
            </div>
            <div className={s.postDate}>
                {props.date}
            </div>
            <div className={s.postContent}>
                <pre>{props.postContent}</pre>
            </div>
            <div className={s.likes}>
                <div className={s.likeButton}>
                </div>
                <span className={s.likesCount}>{props.likesCount}</span>
            </div>
            <div className={s.comments}>
                <div className={s.commentsButton}>
                </div>
                <div className={s.commentsCount}>
                    {props.comments.length}
                </div>
                <div className={s.commentsWrapper}>

                </div>
            </div>
        </div>
    )
}

export default Post;