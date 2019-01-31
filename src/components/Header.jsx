import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";




class Header extends Component {
  
  
  render() {
    return <Container>
        <Navbar>
          <Row>
            <Col lg={6}>
              <h1>Invoice App</h1>
            </Col>
            <Col lg={3}>
              <Link to="products">
                <h3>Products</h3>
              </Link>
            </Col>
            <Col lg={3}>
              <Link to="customers">
                <h3>Customers</h3>
              </Link>
            </Col>
          </Row>
        </Navbar>
      </Container>      
  }
}
export default Header;