import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";



const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    getPostChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text)) 
    }
  }
}

const DialogsContainer= connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
