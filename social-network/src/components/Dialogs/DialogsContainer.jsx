import { connect } from "react-redux";
import { compose } from "redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
