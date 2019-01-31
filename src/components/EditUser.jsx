// Core
import React, { Component, createRef } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


class EditUser extends Component {

  newUserForm = createRef();

  _handleSubmit = event => {
    const { _editUserAsync, changeUser } = this.props;
    event.preventDefault();
    const form = this.newUserForm.current;
    const user = {
      name: form[0].value,
      address: form[1].value,
      phone: form[2].value
    };
    _editUserAsync(changeUser.id, user);
  };

  _currentUserTable = () => {
    const { changeUser } = this.props;
    return (
      <Form ref={this.newUserForm}>
        <Form.Row>
          <Form.Group as={Col} controlId="userName">
            <Form.Label>User Name</Form.Label>
            <Form.Control required type="text" defaultValue={changeUser.name} />
          </Form.Group>
          <Form.Group as={Col} controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              defaultValue={changeUser.address}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="text"
              defaultValue={changeUser.phone}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  };

  render() {
    const { changeUser } = this.props;
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit user {changeUser.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{this._currentUserTable()}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit" onClick={this._handleSubmit}>
            Save
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
