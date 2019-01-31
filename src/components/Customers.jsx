// Core
import React, { Component, createRef } from "react";

import Container from "react-bootstrap/Container";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

import Button  from 'react-bootstrap/Button';
import Table  from 'react-bootstrap/Table';

// Instruments
import {api} from '../api.js';

// Components
import CreateUser from './CreateUser'
import EditUser from "./EditUser";
import DelUser from "./DelUser";

class Customers extends Component {
  state = {
    users: [],
    changeUser: {},
    createUser: false,
    editUser: false,
    delUser: false,
    userId: '',
  };

  componentDidMount() {
    this._getUsers();
  }

  _getUsers = async () => {
    const users = await api.getUsers();
    this.setState({ users });
  };

  _createUserAsync = async user => {
    await api.setUser(user);
    this._getUsers();
    this._closeCreateUser();
  };

  _delUserAsync = async (id) => {
    await api.delUser(id);
    this._getUsers();
    this._closeDelUser();
  };

  _editUserAsync = async (id, user) => {
    await api.editUser(id, user);
    this._getUsers();
    this._closeEditUser();
  };

  _getCurrentUser = event => {
    const currentId = event.target.parentNode.parentNode.dataset.id;
    const currentUserName =
      event.target.parentNode.parentNode.children[3].dataset.name;
    const currentUserAddress =
      event.target.parentNode.parentNode.children[4].dataset.address;
    const currentUserPhone =
      event.target.parentNode.parentNode.children[5].dataset.phone;

    const changeUser = {
      id: currentId,
      name: currentUserName,
      address: currentUserAddress,
      phone: currentUserPhone
    };

    this.setState({
      changeUser: changeUser,
      editUser: true
    });
  };

  _createTable = () => {
    const { users } = this.state;
    return users.map((user, index) => {
      return (
        <tr key={user.id} data-id={user.id}>
          <td>{++index}</td>
          <td>
            <Button variant="danger" onClick={this._openDelUser}>
              Del
            </Button>
          </td>
          <td>
            <Button variant="info" onClick={this._getCurrentUser}>
              Edit
            </Button>
          </td>
          <td data-name={user.name}>{user.name}</td>
          <td data-address={user.address}>{user.address}</td>
          <td data-phone={user.phone}>{user.phone}</td>
        </tr>
      );
    });
  };
  _openCreateUser = () => {
    this.setState({ createUser: true });
  };

  _closeCreateUser = () => {
    this.setState({ createUser: false });
  };

  _openEditUser = () => {
    this.setState({ editUser: true });
  };

  _closeEditUser = () => {
    this.setState({ editUser: false });
  };
  _openDelUser = () => {
    const currentId = event.target.parentNode.parentNode.dataset.id;
    this.setState({ delUser: true, userId: currentId });
  };

  _closeDelUser = () => {
    this.setState({ delUser: false });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col lg={3}>
            <h1>Customer list</h1>
          </Col>
          <Col>
            <Button onClick={this._openCreateUser}>Create</Button>
            <CreateUser
              _createUserAsync={this._createUserAsync}
              show={this.state.createUser}
              onHide={this._closeCreateUser}
            />
            <EditUser
              _editUserAsync={this._editUserAsync}
              show={this.state.editUser}
              onHide={this._closeEditUser}
              changeUser={this.state.changeUser}
            />
            <DelUser
              _delUserAsync={this._delUserAsync}
              show={this.state.delUser}
              onHide={this._closeDelUser}
              changeUser={this.state.changeUser}
              userId={this.state.userId} 
            />
          </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>DEL</th>
              <th>EDIT</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{this._createTable()}</tbody>
        </Table>
      </Container>
    );
  }
}
export default Customers;

