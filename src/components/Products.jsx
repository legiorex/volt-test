import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button  from 'react-bootstrap/Button';
import Table  from 'react-bootstrap/Table';
// import Checkbox from "react-bootstrap/lib/Checkbox";

import {api} from '../api.js';

class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this._getProducts();
  }

  _getProducts = async () => {
    const products = await api.getProducts();
    this.setState({ products });
  };
  _createTable = () => {
    const { products } = this.state;
    return products.map((product, index) => {
      return <tr key={product.id}>
          <td>{++index}</td>
          <td>            
            {/* <Checkbox onClick={e => handler(e.target.checked)} /> */}
          </td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>;
    });
  };

  render() {
    return <Container>
        <Row>
          
            <Col lg={3}>
              <h1>Product list</h1>
            </Col>
            <Col>              
              <Button>Create</Button>              
            </Col>
          
        </Row>

        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Check</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{this._createTable()}</tbody>
        </Table>
      </Container>;
  }
}
export default Products;