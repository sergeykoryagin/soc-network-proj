import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = (dispatch) => ({
    createNewPost: () => {
        dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
        dispatch(updateNewPostTextActionCreator(text))
    }
})

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;