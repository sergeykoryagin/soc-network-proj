import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D\&ixlib=rb-1.2.1\&auto=format\&fit=crop\&w=376\&q=80"
                alt="user-avatar" />
            <div className={s.postContent}>
                {props.postContent}
            </div>
            <div className={s.likes}>
                <span className={s.likeButton}>Нравится</span>
                <span className={s.likesCount}>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;