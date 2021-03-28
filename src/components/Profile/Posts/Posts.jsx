import s from './Posts.module.css';
import Post from './Post/Post.jsx'

const Posts = (props) => {
    let postElements = props.posts.map(p => <Post id={p.id} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts}>
            <h3>Posts</h3>
            <div className={s.newPost}>
                <textarea placeholder="New post..."></textarea>
                <button>Post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default Posts;