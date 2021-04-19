import {connect} from "react-redux";
import Posts from "./Posts";


const mapStateToProps = (state) => ({
    posts: state.profilePage.posts
})

const mapDispatchToProps = (dispatch) => ({})


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;