import s from "./NewPost.module.css";
import React from "react";

const NewPost = (props) => {

    let onCreateNewPost = () => {
        props.createNewPost()
    }

    let onPostTextChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.newPost}>
            <span>create new post</span>
            <div className={s.post}>
                <div className={s.textarea}>
                    <textarea placeholder="write here..."
                              value={props.newPostText} onChange={onPostTextChange}/>
                </div>
                <div className={s.postButton}>
                    <span onClick={onCreateNewPost}>post</span>
                </div>
            </div>
        </div>
    )
}

export default NewPost;