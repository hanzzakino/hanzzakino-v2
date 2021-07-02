//import './MainView.css';

import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';


class NavView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myName : "Hanz Aquino",
    };

  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#">&nbsp;&nbsp;<b>Hanz Aquino</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  
}

export default NavView;
