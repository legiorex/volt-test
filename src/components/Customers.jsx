import React, { Component } from 'react';
import {render} from "react-dom";
import Grid  from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import PageHeader  from 'react-bootstrap/lib/PageHeader';
import Button  from 'react-bootstrap/lib/Button';
import Table  from 'react-bootstrap/lib/Table';

import {api} from '../api.js';

class Header extends Component {

   test = async () => {
    
     const a = await api.fetchUsers()
    return a;
    
  }
  // async fetchUsers() {
  //   const response = await fetch('http://localhost:8000/api/customers', {
  //     method: 'GET',
  //   });

  //   const users = await response.json();
  //   console.log(users)
  //   return users;
  
  // }
  

  render() {
    this.test()
    // const test = () => {
    //   console.log('test')
    // }
    // console.log(this.test())
    
    
    // const test = api.fetchUsers()
    // for(let item in test){
    //   console.log(item)
    // }
    // console.log(test)
    
    return(
      <Grid>
      <Row>
      <PageHeader>
        <Col lg={3}>
          Customer list
        </Col>
        <Col >
          <Button>Create</Button>
        </Col>
        </PageHeader>
      </Row>

      <Table >
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Address</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>;
        
        

      </Grid>
      
    )
  }
}
export default Header;