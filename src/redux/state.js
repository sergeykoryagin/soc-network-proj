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

    getState(){
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST"){
            this._state.profilePage.posts.push({
                id: this._state.profilePage.posts.length + 1,
                postContent: this._state.profilePage.newPostText,
                likesCount: 0,
                date: "11.04.2021, sunday",
                comments: []
            })
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
        else if (action.type === "ADD-MESSAGE") {
            this._state.dialogPage.messages.push({
                id: this._state.dialogPage.messages.length + 1,
                message: this._state.dialogPage.newMessageText
            })
            this._state.dialogPage.newMessageText = ""
            this._callSubscriber(this._state)
        }
        else if (action.type === "UPDATE-NEW-MESSAGE-TEXT"){
            this._state.dialogPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export default store;

window.store = store