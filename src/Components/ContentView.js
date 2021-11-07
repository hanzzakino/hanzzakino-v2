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

    //COMPONENT FUNCTIONS
    //footer part in cluding the copyright statement
    this.Footer = this.Footer(this);
    //header (intro image)
    this.Header = this.Header(this);
    //about me (my image and intro message)
    this.AboutMe = this.AboutMe(this);
    //main content
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
                    <p ref={ref} className={inView ? "H-CtnMSlogan-shw":"H-CtnMSlogan-hid"}  ><span className="H-CtnSlogan-creative"></span><br /><span className="H-CtnSlogan">H E</span> <span className="H-CtnSlogan2">A R T</span></p>
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
      <br /><br /><br />
      </div>

      <div className="hz-container">
        <div className="hz-row-unresponsive">

          <div className="hz-column-fit">
              <div className="hz-line-curved H-Ctn-line2"></div>      
          </div>
          <div className="hz-column-fit">

            <div className="hz-line-curved-tip"></div>


          </div>

          <div className="hz-column-fit-height">
          <h1 className="hz-content-projects-title">My Projects</h1>
          <br /><br /><br />
          </div>

        </div>

      </div>


      <br /><br /><br />

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
            <br />

            <h3 className="hz-content-programminng-web-title">Web Development</h3>

            <div className="hz-row hz-fullcentered">
              <div className="hz-column">
                <div className="hz-test-sample-image"></div>
              </div>
              <div className="hz-column">
                <p className="hz-content-text" id="web">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet erat convallis, ultricies diam ultrices, lacinia purus. In dictum lectus eu massa interdum tempor. Curabitur dictum rhoncus ligula eu vehicula. Sed fringilla blandit lorem nec scelerisque. 
                <br /> <br />
                </p>
              </div>
            </div>

            <p className="hz-content-text">
              Pellentesque ac elit et neque vestibulum luctus vel vitae mi. Donec sapien tellus, maximus eget egestas non, scelerisque eu metus. Proin aliquam nibh dictum nibh ultrices, non scelerisque sem dictum. Cras eget pretium lorem. Etiam blandit, lacus non consectetur venenatis, lorem magna placerat felis, eu aliquam nulla nisl ac tortor. Etiam id scelerisque nisi. Nam quis dolor quis justo suscipit suscipit. Curabitur laoreet tincidunt nisi sit amet ornare. Proin ut velit sit amet eros condimentum dignissim. In imperdiet felis et hendrerit convallis. Nullam dapibus massa pharetra elit porta dignissim. Maecenas a eleifend risus, vel commodo eros. Pellentesque dictum commodo erat, consequat sagittis velit euismod quis. Etiam finibus eu lectus eu aliquet. Morbi erat sem, rhoncus interdum rhoncus nec, sagittis ut lacus.
            </p>




            <h3 className="hz-content-programminng-web-title">Desktop App Development</h3>
            <p className="hz-content-text" id="web">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet erat convallis, ultricies diam ultrices, lacinia purus. In dictum lectus eu massa interdum tempor. Curabitur dictum rhoncus ligula eu vehicula. Sed fringilla blandit lorem nec scelerisque. Pellentesque malesuada ipsum in orci lobortis, et ullamcorper quam interdum. Fusce volutpat, mauris et convallis maximus, odio massa interdum dui, ut tempus tellus arcu ut velit. Aenean placerat et purus id semper. Ut interdum eleifend pellentesque. Aenean ac malesuada augue. Mauris tempus ex vitae ante interdum, id sodales ipsum congue.
            <br /> <br />
            Pellentesque ac elit et neque vestibulum luctus vel vitae mi. Donec sapien tellus, maximus eget egestas non, scelerisque eu metus. Proin aliquam nibh dictum nibh ultrices, non scelerisque sem dictum. Cras eget pretium lorem. Etiam blandit, lacus non consectetur venenatis, lorem magna placerat felis, eu aliquam nulla nisl ac tortor. Etiam id scelerisque nisi. Nam quis dolor quis justo suscipit suscipit. Curabitur laoreet tincidunt nisi sit amet ornare. Proin ut velit sit amet eros condimentum dignissim. In imperdiet felis et hendrerit convallis. Nullam dapibus massa pharetra elit porta dignissim. Maecenas a eleifend risus, vel commodo eros. Pellentesque dictum commodo erat, consequat sagittis velit euismod quis. Etiam finibus eu lectus eu aliquet. Morbi erat sem, rhoncus interdum rhoncus nec, sagittis ut lacus.
            </p>

            <h3 className="hz-content-programminng-web-title">Algorithms</h3>
            <p className="hz-content-text" id="web">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet erat convallis, ultricies diam ultrices, lacinia purus. In dictum lectus eu massa interdum tempor. Curabitur dictum rhoncus ligula eu vehicula. Sed fringilla blandit lorem nec scelerisque. Pellentesque malesuada ipsum in orci lobortis, et ullamcorper quam interdum. Fusce volutpat, mauris et convallis maximus, odio massa interdum dui, ut tempus tellus arcu ut velit. Aenean placerat et purus id semper. Ut interdum eleifend pellentesque. Aenean ac malesuada augue. Mauris tempus ex vitae ante interdum, id sodales ipsum congue.
            <br /> <br />
            Pellentesque ac elit et neque vestibulum luctus vel vitae mi. Donec sapien tellus, maximus eget egestas non, scelerisque eu metus. Proin aliquam nibh dictum nibh ultrices, non scelerisque sem dictum. Cras eget pretium lorem. Etiam blandit, lacus non consectetur venenatis, lorem magna placerat felis, eu aliquam nulla nisl ac tortor. Etiam id scelerisque nisi. Nam quis dolor quis justo suscipit suscipit. Curabitur laoreet tincidunt nisi sit amet ornare. Proin ut velit sit amet eros condimentum dignissim. In imperdiet felis et hendrerit convallis. Nullam dapibus massa pharetra elit porta dignissim. Maecenas a eleifend risus, vel commodo eros. Pellentesque dictum commodo erat, consequat sagittis velit euismod quis. Etiam finibus eu lectus eu aliquet. Morbi erat sem, rhoncus interdum rhoncus nec, sagittis ut lacus.
            </p>



            

            <h3 className="hz-content-programminng-web-title">Sample Apps</h3>

            <button className="hz-content-programminng-web-appbutton" onClick={() => window.open("https://bankeralgo-hanzzakino.vercel.app")}>
              <div className="hz-row">
                 <div className="hz-test-sample-image"></div>
              </div>
              <div className="hz-row">
                 <p className="hz-content-text" id="web">Banker's Algorithm</p>
              </div>
            </button>






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
                      <b className="H-Ctn-aboutme-nametxt">{this.state.myFullName} </b>
                      <br />
                      <span style={hCourse}>
                      BS in Computer Engineering
                      <br />
                      <i >Creator</i>
                      <br />
                      <br />
                      <a href="https://facebook.com/hanzz.akino" ><i style={hFbLogo} className="bi-facebook hz-content-soclinks"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                      <a className="" href="https://twitter.com/hanzzakino" ><i style={hTwLogo} className="bi-twitter hz-content-soclinks" ></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                      <a href="https://github.com/hanzzakino" ><i style={hGhLogo} className="bi-github hz-content-soclinks"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
                      <a href="mailto:emperornezl50@gmail.com" ><i style={hMlLogo} className="bi-envelope-fill hz-content-soclinks"></i></a><span>&nbsp;&nbsp;&nbsp;</span>
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
                <h2 className="H-Ctn-hitxt">Hi! I'm Hanz,</h2>
                <p className="hz-content-intro-message">
                  I'm currently a Computer Engineering student and I put my Heart and Soul into converting ideas and creativity into a reliable, convenient, and user-friendly piece of technology that can help create a better functionality.
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
              <a className="" href="https://twitter.com/hanzzakino" ><i style={hFLogo} className="bi-twitter" ></i></a><span>&nbsp;&nbsp;&nbsp;</span>
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