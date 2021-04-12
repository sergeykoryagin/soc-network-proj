const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    newPostText: "",
    posts: [
        {
            id: 1,
            postContent: "today i’am started learn html + css\n" +
                "it’s very simply, however there are many features that you need to remember",
            likesCount: "5",
            date: "20.03.2021, saturday",
            comments: [
                {
                    id: 1, content: "good job"
                }
            ]
        },
        {
            id: 2,
            postContent: "finnaly, i went to the theater with my friends ",
            likesCount: "10",
            date: "04.04.2021, saturday",
            comments: [
                {
                    id: 1, content: "cool!"
                },
                {
                    id: 2, content: "lol"
                }
            ]
        }
    ]
}


const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            state.posts.push({
                id: state.posts.length + 1,
                postContent: state.newPostText,
                likesCount: 0,
                date: "11.04.2021, sunday",
                comments: []
            })
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
})

export default profileReducer