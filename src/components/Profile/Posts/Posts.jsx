import s from './Posts.module.css';
import Post from './Post/Post.jsx'

const Posts = () => {
    return (
        <div className={s.posts}>
            <h3>Posts</h3>
            <div className={s.newPost}>
                <textarea placeholder="New post..."></textarea>
                <button>Post</button>
            </div>
            <div>
                <Post postContent="Эй))" likesCount="15" />
                <Post postContent="Кек" likesCount="20" />
            </div>
        </div>
    )
}

export default Posts;