// Core
import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


class EditUser extends Component {
  
  _confirmDel = () => {
    const { _delUserAsync, userId } = this.props;    
    _delUserAsync(userId);
  };

  render() {
    const { changeUser } = this.props;
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete the user?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={this._confirmDel}>
            Delete
          </Button>
          <Button variant="primary" onClick={this.props.onHide}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default EditUser;
