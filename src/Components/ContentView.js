import React from 'react';
import { InView } from 'react-intersection-observer';
import './ContentView.css';
import headerBackground from '../Assets/img/hz-header-bg.jpg'
import myImage from '../Assets/img/hz-me.png'

class ContentView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myName : "Hanz Aquino",
      myFullName : "Hanz Christian C. Aquino",
      activeDiv : "",
      scrollTopPX: 0,
      scrollTopPT: 0,
    };
    this.Footer = this.Footer(this);
    this.Header = this.Header(this);
    this.AboutMe = this.AboutMe(this);
    this.Content = this.Content(this);
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
      backgroundColor : "rgb(37,40,47)",
      backgroundBlendMode: "overlay",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginTop: "-58px",
      height: "90vh",
    };
    return(
      <div style={headerBackgroundStyle}>
          
          <div className="hz-row hz-fullcentered">
              <div className="hz-column" align="center" >
                <InView rootMargin='-50px 0px' triggerOnce>
                  {({ inView, ref, entry }) => (
                    <p ref={ref} className={inView ? "H-CtnMSlogan-shw":"H-CtnMSlogan-hid"}  >A<br /><span>C R E A T I V E</span><br />H E <span className="H-CtnSlogan">A R T .</span></p>
                  )}
                </InView>
                
                <p className="H-Ctn-Scrolldowntext">Scroll down</p>
              </div>

          </div>
      </div>
    );
  }
  Content(){
    return(
    <div>

      <div className="hz-row" align="center">
        <div className="hz-column">
          <br />
            <button className="hz-transparent" onClick={() => {
              const content1 = document.getElementById("content-1");
              if(content1)content1.scrollIntoView({ behavior: 'smooth' , block: "start"});
            }} 
            ><span className="bi-chevron-down hz-cv-scrolldowncehvron"></span></button>

        </div>
      </div>
      <br /> <br />

      <div  id="content-1">
      <br /><br /><br /><br />
      {this.AboutMe}
      <br /><br /><br /><br /><br /><br />
      </div>

      <div className="hz-container">
        <div className="hz-row-unresponsive">
          <div className="hz-column-fit">

            <div className="hz-line-ci">
              <div className="hz-circle H-Ctn-circle1"></div>
              <div className="hz-line H-Ctn-line1"></div>
            </div>

          </div>
          <div className="hz-column">
            <h2 className="hz-content-programminng-title">Programming</h2>
            <h3 className="hz-content-programminng-web-title">Web Development</h3>

            <p className="hz-content-text" id="web">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet erat convallis, ultricies diam ultrices, lacinia purus. In dictum lectus eu massa interdum tempor. Curabitur dictum rhoncus ligula eu vehicula. Sed fringilla blandit lorem nec scelerisque. Pellentesque malesuada ipsum in orci lobortis, et ullamcorper quam interdum. Fusce volutpat, mauris et convallis maximus, odio massa interdum dui, ut tempus tellus arcu ut velit. Aenean placerat et purus id semper. Ut interdum eleifend pellentesque. Aenean ac malesuada augue. Mauris tempus ex vitae ante interdum, id sodales ipsum congue.
            <br /> <br />
            Pellentesque ac elit et neque vestibulum luctus vel vitae mi. Donec sapien tellus, maximus eget egestas non, scelerisque eu metus. Proin aliquam nibh dictum nibh ultrices, non scelerisque sem dictum. Cras eget pretium lorem. Etiam blandit, lacus non consectetur venenatis, lorem magna placerat felis, eu aliquam nulla nisl ac tortor. Etiam id scelerisque nisi. Nam quis dolor quis justo suscipit suscipit. Curabitur laoreet tincidunt nisi sit amet ornare. Proin ut velit sit amet eros condimentum dignissim. In imperdiet felis et hendrerit convallis. Nullam dapibus massa pharetra elit porta dignissim. Maecenas a eleifend risus, vel commodo eros. Pellentesque dictum commodo erat, consequat sagittis velit euismod quis. Etiam finibus eu lectus eu aliquet. Morbi erat sem, rhoncus interdum rhoncus nec, sagittis ut lacus.
            <br /> <br />
            Vestibulum fermentum vulputate posuere. In fermentum magna eu suscipit faucibus. Suspendisse augue nibh, ultricies sit amet orci in, suscipit posuere dui. Sed at turpis in libero mattis lacinia. Sed quis posuere ex. In vitae finibus tortor, quis finibus massa. In velit metus, dictum id semper vitae, feugiat a risus. Aenean venenatis pretium risus tempus tincidunt. Aliquam venenatis sodales mi, non auctor arcu. Fusce malesuada elit ante, non sagittis tortor tincidunt at. Fusce nec mauris tincidunt, ultrices purus id, maximus purus. Etiam et dui dictum, sollicitudin libero non, porta felis. Ut faucibus consequat justo eu mattis.
            <br /> <br />
            Nam et sodales eros, a imperdiet elit. Morbi purus nibh, rutrum non tempus id, condimentum ac quam. Suspendisse potenti. Pellentesque ut massa eu neque placerat vehicula et mattis erat. Duis facilisis nec enim quis imperdiet. Phasellus blandit ante vel leo pretium consequat. Phasellus sem massa, luctus vitae faucibus vel, venenatis non elit. Proin scelerisque eu magna a tincidunt.
            <br /> <br />
            Cras semper dolor ut magna maximus, vestibulum finibus elit cursus. Nullam id nulla eget orci vestibulum hendrerit. Fusce facilisis tincidunt quam, nec fermentum magna maximus et. Aliquam sed sagittis ante. Mauris vestibulum enim venenatis rutrum lobortis. Suspendisse sollicitudin congue tincidunt. Quisque id volutpat nibh.
            <br /> <br />
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

      <br /><br /><br /><br />

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
      fontSize: "13px",
      opacity: "60%",
    }

    return(
      <div className="hz-container">
        <div className="hz-row hz-fullcentered">
          <div className="hz-column">
            <div className="hz-row hz-fullcentered">
              <div className="hz-column-fit">
                <InView rootMargin='-100px 0px' triggerOnce="true">
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <span><img className={inView ? "H-CtnImgMe-shw":"H-CtnImgMe-hid"} src={myImage} width="150" alt="me"/></span>
                    </div>
                  )}
                  </InView>
              </div>
              <div className="hz-column">

                <InView rootMargin='0px 0px' triggerOnce="true">
                  {({ inView, ref, entry }) => (
                    <p ref={ref} className={inView ? "hz-content-aboutme-nametag":"hz-content-aboutme-nametag-hidden"}>
                      <b>{this.state.myFullName} </b>
                      <br />
                      <span style={hCourse}>
                      BS in Computer Engineering
                      <br />
                      <i >Creator</i>
                      <br />
                      <a href="https://facebook.com/hanzz.akino" ><i style={hFbLogo} className="bi-facebook"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                      <a className="" href="https://twitter.com/HanzzAquino" ><i style={hTwLogo} className="bi-twitter" ></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                      <a href="https://github.com/hanzzakino" ><i style={hGhLogo} className="bi-github"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                      <a href="mailto:emperornezl50@gmail.com" ><i style={hMlLogo} className="bi-envelope-fill"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                      </span>
                    </p>
                  )}
                </InView>

              </div>
            </div>
            <br />
          </div>

          <InView rootMargin='0px 0px' triggerOnce="true">
            {({ inView, ref, entry }) => (  
              <div  ref={ref} className={inView ? "hz-column-fit-height hz-slidein":"hz-column-fit-height hz-slidein-hidden"}>
                <h2 className="H-Ctn-hitxt">Hi, I'm Hanz</h2>
                <p>
                  I'm  a Computer Engineering student who enjoys converting ideas and creativity into a reliable, convenient, and user-friendly Software that can be utilized to aid your productivity.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet erat convallis, ultricies diam ultrices, lacinia purus. 
                </p>
              </div>  
            )}
          </InView>

        </div>
      </div>
    );
  }

  Footer(){
    var hFLogo = {
      color: "rgb(180,180,180)",
    };


    return(
      <div className="hz-container">

          <div className="hz-content-footer hz-light-text">
            <div className="hz-column" align="left">
              <p>Copyright &#169; 2021 Hanz Aquino. All rights reserved.</p>
            </div>

            <div className="hz-column" align="right">
              <p>
              <a href="https://facebook.com/hanzz.akino" ><i style={hFLogo} className="bi-facebook"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
              <a className="" href="https://twitter.com/HanzzAquino" ><i style={hFLogo} className="bi-twitter" ></i></a><span>&nbsp;&nbsp;&nbsp;</span>
              <a href="https://github.com/hanzzakino" ><i style={hFLogo} className="bi-github"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
              <a href="mailto:emperornezl50@gmail.com" ><i style={hFLogo} className="bi-envelope-fill"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
              <i className="bi-heart-fill" style={hFLogo}></i>
              </p>
            </div>
          </div>

      </div>
      );
  }



  render() {
    return (
      <div>

        {this.Header}

        <div>
        {this.Content}
        <div>


        <br /><br /><br /><br /><br /><br /><br /><br />
        <InView rootMargin='-200px 0px'>
          {({ inView, ref, entry }) => (
            <div ref={ref}>
              {inView ? (<div>Viewed</div>):(<div>Not viewed</div>)}
            </div>
          )}
        </InView>
        </div>

        

        <hr />
        </div>
        <br />
        {this.Footer}

      </div>
    );
  }

}

export default ContentView;
