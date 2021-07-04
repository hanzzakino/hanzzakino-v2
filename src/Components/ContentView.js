import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import './ContentView.css';

class ContentView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myName : "Hanz Aquino",
      myFullName : "Hanz Christian C. Aquino",
    };
    this.Footer = this.Footer(this);
    this.Header = this.Header(this);
    this.AboutMe = this.AboutMe(this);
  }

  Header(){
    return(
      <Container>
          <Row className="d-flex align-items-center">
              <Col md="6" align="center">
                <Image src="/img/logo/logo2.png" fluid></Image>
              </Col>
              <Col md="6" align="center" >
                <Image src="/img/logo/hz.png" fluid></Image>
                <br /><br />
                <p className="H-CtnMSlogan">A&nbsp;&nbsp;&nbsp;C R E A T I V E&nbsp;&nbsp;&nbsp;H E <span className="H-CtnSlogan">A R T .</span></p>
              </Col>
          </Row>
      </Container>
    );
  }
  AboutMe(){
    var hFbLogo = {
      color: "#1877f2",
    };
    var hTwLogo = {
      color: "#1DA1F2",
    };
    var hGhLogo = {
      color: "white",
    };
    var hMlLogo = {
      color: "white",
    };
    var hCourse = {
      fontSize: "14px"
    }

    return(
      <Container>
        <Row>
          <Col md="6">
            <Row className="d-flex align-items-center">
              <Col sm="4">
                <span><img className="H-CtnImgMe" src="/img/pl-me/me.png" width="150" alt="me"/></span>
              </Col>
              <Col className="justify">
                <p>
                  <br />
                  <b>{this.state.myFullName}</b>
                  <br />
                  <span style={hCourse}>
                  BS in Computer Engineering
                  <br />
                  <i>Creator</i>
                  <br />
                  <a href="https://facebook.com/hanzz.akino" ><i style={hFbLogo} className="bi-facebook"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                  <a className="" href="https://twitter.com/HanzzAquino" ><i style={hTwLogo} className="bi-twitter" ></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                  <a href="https://github.com/hanzzakino" ><i style={hGhLogo} className="bi-github"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                  <a href="mailto:emperornezl50@gmail.com" ><i style={hMlLogo} className="bi-envelope-fill"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                  </span>
                </p>
              </Col>
            </Row>
            <br />
          </Col>

          <Col md="6">
            <span>
              <span><h2>Hi, I'm Hanz</h2></span>
              <br />
              <span>
                I'm  a Computer Engineering student who enjoys converting ideas and creativity into a reliable, convenient, and user-friendly Software that can be utilized to aid your productivity.
              </span>
              <br /><br />
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
  Footer(){
    return(
        <Container>
          <Row>
            <Col xs="6" align="left">
              <p> &#169; 2021</p>
            </Col>

            <Col xs="6" align="right">
              <p>
                By: &nbsp; {this.state.myName} &nbsp;
                <i className="bi-heart-fill"></i>
                &nbsp;
              </p>
            </Col>
          </Row>
        </Container>
      );
  }

  render() {
    return (
      <div>
        {this.Header}
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <hr />
        {this.AboutMe}
        {this.Footer}
      </div>
    );
  }

}

export default ContentView;
