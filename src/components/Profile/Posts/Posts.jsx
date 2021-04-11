import s from './Posts.module.css';
import Post from './Post/Post.jsx'

const Posts = (props) => {
    let postElements = props.posts.map(p => <Post id={p.id} likesCount={p.likesCount} postContent={p.postContent}
                                                  date={p.date} comments={p.comments}/>)

    return (
        <div className={s.posts}>
            {postElements.reverse()}
        </div>
    )
}

export default Posts;