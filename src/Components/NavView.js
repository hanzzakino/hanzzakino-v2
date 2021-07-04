
import React from 'react';

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
} from 'react-bootstrap';

import './NavView.css';

class NavView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myName : "Hanz Aquino",
      toggledDown: false,
      Skills : {
        "Programming" : {
          "Web": "#web",
          "Desktop": "#desktop",
          "Math and Algorithms": "#mathnalgo",
        },
        "Computer Graphics" : {
          "2D Arts": "#2d",
          "3D Arts": "#3d",
          "Designs": "#design",
        },
        "Mathematics" : {
          "Physics": "#physics",
          "Geometry": "#geometry",
          "Math": "#math",
        },
        "Engineering" : {
          "Circuit Design": "#circuits",
          "Logic Design" : "#logic",
          "Research": "#research",
        },
      }
    };

    this.toggleCliked = this.toggleCliked.bind(this);

  }

  toggleCliked(){
    this.setState({
      toggledDown: !this.state.toggledDown,
    });

  }

  render() {

    //Navbar Items
    var navItems = null;
    var navGroup = [];
    var navColumns1 = [];
    var navColumns2 = [];
    for(var a in this.state.Skills){
      navItems = [];
      navItems.push(<p className="H-NvLink-head"><b>{a}</b></p>);
      for(var b in this.state.Skills[a]){
        navItems.push(<Nav.Link className="H-NvLink" href={this.state.Skills[a][b]}><span className="H-NvLink" >{b}</span></Nav.Link>);
      }
      navGroup.push(<><Nav className="mr-auto">{navItems}</Nav><hr /></>);
    }
    for (var i = 0; i < navGroup.length; i++) {
      if(i%2===0){
        navColumns1.push(navGroup[i]);
      } else {
        navColumns2.push(navGroup[i]);
      }
    }

    //toggle
    var toggleIcon = null;
    if(this.state.toggledDown){
      toggleIcon = <i className="bi-chevron-up"></i>
    } else {
      toggleIcon = <i className="bi-chevron-down"></i>;
    }

    return (
      <div>
        <Navbar className="H-Navbar" expand="xs" fixed="top">
          <Navbar.Brand href="#"><span className="H-NvBrand">&nbsp;&nbsp;<strong>{this.state.myName}</strong></span></Navbar.Brand>
          <span>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.toggleCliked}>
              <span className="H-NvToggle">
                {toggleIcon}
              </span>
            </Navbar.Toggle>
            &nbsp;
          </span>
          <Navbar.Collapse>
            <Container>
              <hr />
              <Row>
                <Col align="center">{navColumns1}</Col>
                <Col align="center">{navColumns2}</Col>
              </Row>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  
}

export default NavView;
