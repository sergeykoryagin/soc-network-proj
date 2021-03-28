import s from './Posts.module.css';
import Post from './Post/Post.jsx'

const Posts = () => {
    return (
        <div className={s.posts}>
            Posts
            <div className={s.newPost}>
                <textarea placeholder="Новый пост"></textarea>
                <button>Опубликовать</button>
            </div>
            <div>
                <Post postContent="Эй))" likesCount="15" />
                <Post postContent="Кек" likesCount="20" />
            </div>
        </div>
    )
}

export default Posts;