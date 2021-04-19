const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: state.messages.length + 1,
                        message: state.newMessageText
                    }
                ],
                newMessageText: ""
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})
export const updateNewMessageTextActionCreator = (newText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText
})

export default dialogsReducer