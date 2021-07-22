import React from 'react';
import { InView } from 'react-intersection-observer';
import {
  Container,
  Row,
  Col,
  Overlay,
} from 'react-bootstrap';
import './ContentView.css';
import headerBackground from '../Assets/img/hz-header-bg.jpg'


class ContentView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myName : "Hanz Aquino",
      myFullName : "Hanz Christian C. Aquino",
      activeDiv : "",
    };
    this.Footer = this.Footer(this);
    this.Header = this.Header(this);
    this.AboutMe = this.AboutMe(this);
    this.Content = this.Content(this);

    this.scrollToContent = this.scrollToContent(this);
  }

  scrollToContent(){
    const content1 = document.getElementById("content-1");
    if(content1)content1.scrollIntoView({ behavior: 'smooth' , block: "start"});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    this.setState({
      scrollTopPX: winScroll,
      scrollTopPT: scrolled,
    })
  }


  Header(){
    const headerBackgroundStyle= {
      backgroundImage : "url("+headerBackground+")",
      backgroundColor : "rgb(57,60,67)",
      backgroundBlendMode: "overlay",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginTop: "-58px",
      height: "90vh",
    };
    return(
      <div style={headerBackgroundStyle}>
          <br /><br /><br />
          <Row className="d-flex align-items-center">
              <Col md="6" align="center">
                
              </Col>
              <Col md="6" align="center" >
                
                <br /><br />
                <InView rootMargin='-50px 0px' triggerOnce>
                  {({ inView, ref, entry }) => (
                    <p ref={ref} className={inView ? "H-CtnMSlogan-shw":"H-CtnMSlogan-hid"}  >A&nbsp;&nbsp;&nbsp;C R E A T I V E&nbsp;&nbsp;&nbsp;H E <span className="H-CtnSlogan">A R T .</span></p>
                  )}
                </InView>
               
              </Col>
          </Row>
      </div>
    );
  }
  Content(){
    return(
    <div>

      <div className="hz-row" align="center">
        <div className="hz-column">
          <br />
            <button onClick={this.scrollToContent} className="hz-transparent"><span className="bi-chevron-down hz-cv-scrolldowncehvron"></span></button>
        </div>
      </div>
      <div className="hz-container" id="content-1">
        <div className="hz-row" align="center">
          <div className="hz-column">
            <br /><br /><br />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet erat convallis, ultricies diam ultrices, lacinia purus. In dictum lectus eu massa interdum tempor. Curabitur dictum rhoncus ligula eu vehicula. Sed fringilla blandit lorem nec scelerisque. Pellentesque malesuada ipsum in orci lobortis, et ullamcorper quam interdum. Fusce volutpat, mauris et convallis maximus, odio massa interdum dui, ut tempus tellus arcu ut velit. Aenean placerat et purus id semper. Ut interdum eleifend pellentesque. Aenean ac malesuada augue. Mauris tempus ex vitae ante interdum, id sodales ipsum congue.
  <br /> <br />
  Pellentesque ac elit et neque vestibulum luctus vel vitae mi. Donec sapien tellus, maximus eget egestas non, scelerisque eu metus. Proin aliquam nibh dictum nibh ultrices, non scelerisque sem dictum. Cras eget pretium lorem. Etiam blandit, lacus non consectetur venenatis, lorem magna placerat felis, eu aliquam nulla nisl ac tortor. Etiam id scelerisque nisi. Nam quis dolor quis justo suscipit suscipit. Curabitur laoreet tincidunt nisi sit amet ornare. Proin ut velit sit amet eros condimentum dignissim. In imperdiet felis et hendrerit convallis. Nullam dapibus massa pharetra elit porta dignissim. Maecenas a eleifend risus, vel commodo eros. Pellentesque dictum commodo erat, consequat sagittis velit euismod quis. Etiam finibus eu lectus eu aliquet. Morbi erat sem, rhoncus interdum rhoncus nec, sagittis ut lacus.
  <br /> <br />
  Vestibulum fermentum vulputate posuere. In fermentum magna eu suscipit faucibus. Suspendisse augue nibh, ultricies sit amet orci in, suscipit posuere dui. Sed at turpis in libero mattis lacinia. Sed quis posuere ex. In vitae finibus tortor, quis finibus massa. In velit metus, dictum id semper vitae, feugiat a risus. Aenean venenatis pretium risus tempus tincidunt. Aliquam venenatis sodales mi, non auctor arcu. Fusce malesuada elit ante, non sagittis tortor tincidunt at. Fusce nec mauris tincidunt, ultrices purus id, maximus purus. Etiam et dui dictum, sollicitudin libero non, porta felis. Ut faucibus consequat justo eu mattis.
  <br /> <br />
  Nam et sodales eros, a imperdiet elit. Morbi purus nibh, rutrum non tempus id, condimentum ac quam. Suspendisse potenti. Pellentesque ut massa eu neque placerat vehicula et mattis erat. Duis facilisis nec enim quis imperdiet. Phasellus blandit ante vel leo pretium consequat. Phasellus sem massa, luctus vitae faucibus vel, venenatis non elit. Proin scelerisque eu magna a tincidunt.
  <br /> <br />
  Cras semper dolor ut magna maximus, vestibulum finibus elit cursus. Nullam id nulla eget orci vestibulum hendrerit. Fusce facilisis tincidunt quam, nec fermentum magna maximus et. Aliquam sed sagittis ante. Mauris vestibulum enim venenatis rutrum lobortis. Suspendisse sollicitudin congue tincidunt. Quisque id volutpat nibh.
            </p>
          </div>
        </div>
      </div>



    </div>);
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
                <InView rootMargin='-100px 0px'>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <span><img className={inView ? "H-CtnImgMe-shw":"H-CtnImgMe-hid"} src="/img/pl-me/me.png" width="150" alt="me"/></span>
                    </div>
                  )}
                  </InView>
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
        <div>
        {this.Content}
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Container>
        <InView rootMargin='-200px 0px'>
          {({ inView, ref, entry }) => (
            <div ref={ref}>
              {inView ? (<div>Viewed</div>):(<div>Not viewed</div>)}
            </div>
          )}
        </InView>
        </Container>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <hr />
        </div>
        {this.AboutMe}
        {this.Footer}
      </div>
    );
  }

}

export default ContentView;
