// Core
import React, { Component, createRef } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


class CreateUser extends Component {
  

  _handleSubmit = event => {
    const {_createUserAsync} = this.props;
    event.preventDefault();
    const form = this.newUserForm.current;
    const user = {
        
        name: form[0].value,
        address: form[1].value,
        phone: form[2].value,
    }
    _createUserAsync(user);
    
  };

  render() {
    
      return <Modal show={this.props.show} onHide={this.props.onHide} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create New User
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this._handleSubmit} ref={this.newUserForm}>
              <Form.Row>
                <Form.Group as={Col} controlId="userName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control required type="text" placeholder="Please, write user name" />
                </Form.Group>
                <Form.Group as={Col} controlId="address">
                  <Form.Label>Address</Form.Label>
                          <Form.Control required type="text" placeholder="Please, write address" />
                </Form.Group>
                <Form.Group as={Col} controlId="phone">
                  <Form.Label>Phone</Form.Label>
                          <Form.Control required type="text" placeholder="Please, write phone" />
                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit" onClick={this._handleSubmit}>
              Create
            </Button>
            <Button variant="primary" onClick={this.props.onHide}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>;
  }
}
export default CreateUser;
