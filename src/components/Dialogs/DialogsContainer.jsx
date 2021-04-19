import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessageText: state.dialogPage.newMessageText
})

const mapDispatchToProps = (dispatch) => ({
    addMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text))
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
