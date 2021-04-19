import {act} from "@testing-library/react";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET-PROFILE'


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
    ],
    profile: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: state.posts.length + 1,
                        postContent: state.newPostText,
                        likesCount: 0,
                        date: "11.04.2021, sunday",
                        comments: []
                    }
                ],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_PROFILE:
            return{
                ...state,
                profile: action.profile
            }
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
export const setProfile = profile => ({
    type: SET_PROFILE,
    profile
})


export default profileReducer