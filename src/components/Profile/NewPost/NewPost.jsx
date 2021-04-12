import s from "./NewPost.module.css";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let createPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let updateNewPostText = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.newPost}>
            <span>create new post</span>
            <div className={s.post}>
                <div className={s.textarea}>
                    <textarea placeholder="write here..." ref={newPostElement}
                              value={props.newPostText} onChange={updateNewPostText}/>
                </div>
                <div className={s.postButton}>
                    <span onClick={createPost}>post</span>
                </div>
            </div>
        </div>
    )
}

export default NewPost;