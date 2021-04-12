import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        dialogPage: {
            newMessageText: "",
            dialogs: [
                {id: 1, name: "Artem"},
                {id: 2, name: "Parahat"},
                {id: 3, name: "Ramil"},
                {id: 4, name: "Anton"},
                {id: 5, name: "Timur"},
                {id: 6, name: "Ildar"}
            ],
            messages: [
                {id: 1, message: "privet Sergey)"},
                {id: 2, message: "Privet)"},
                {id: 3, message: "kak dela?"},
                {id: 4, message: "Otlichno"},
                {id: 5, message: "u tebya kak?"},
                {id: 6, message: "horosho"},
                {id: 7, message: "Sergey esli mozhno u menya pros'ba est'"},
                {id: 8, message: "u nas segodnya kontrol'niy po diffira"}
            ]
        },
        profilePage: {
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
    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)
    }
}


export default store;

window.store = store