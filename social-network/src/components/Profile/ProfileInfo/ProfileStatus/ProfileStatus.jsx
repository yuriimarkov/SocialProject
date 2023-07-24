import React from "react";
import styles from "./../ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    console.log(e);
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className={styles.status}>
        {!this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode}>
            {this.props.status || "-----"}
          </span>
        ) : (
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            value={this.state.status}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
