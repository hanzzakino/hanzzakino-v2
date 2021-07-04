
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
      testClick: null,
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
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(event) {
    this.setState({myName: event.target.name});
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
      navItems.push(<p key={a+"_a"} className="H-NvLink-head">{a}</p>);
      for(var b in this.state.Skills[a]){
        navItems.push(<Nav.Link key={b+"_b"} name={b} onClick={this.handleNavClick} className="H-NvLink" href={this.state.Skills[a][b]}><span key={b+"_c"} className="H-NvLink" >{b}</span></Nav.Link>);
      }
      navGroup.push(<div key={a+"_d"}><Nav key={a+"_e"} className="mr-auto">{navItems}</Nav><hr key={a+"_f"}></hr></div>);
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
            <Navbar.Toggle className="H-NvTogglebtn" aria-controls="basic-navbar-nav" onClick={this.toggleCliked}>
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
                <Col className="navCol1" align="center">
                {navColumns1}
                </Col>
                <Col className="navCol2" align="center">
                {navColumns2}
                </Col>
              </Row>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  
}

export default NavView;
