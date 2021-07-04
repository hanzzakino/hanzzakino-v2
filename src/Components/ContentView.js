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
    };
  }

  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col md="6" align="center">
                </Col>
                <Col md="6" align="center">
                    <p className="H-CtnMSlogan">A&nbsp;&nbsp;&nbsp;C R E A T I V E&nbsp;&nbsp;&nbsp;H E <span className="H-CtnSlogan">A R T .</span></p>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }

}

export default ContentView;
