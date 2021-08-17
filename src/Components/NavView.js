
import React from 'react';
import './NavView.css';
import hzLogo from '../Assets/img/logo/hz-logo (2).svg';

class NavView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myName : "HANZ",
      myFullName : "HANZ AQUINO",
      toggledDown: false,
      testClick: null,
      onPageTop: true,
      scrollingToTop: false,
      scrollTopPX: 0,
      scrollTopPT: 0,
      Skills : {
        "PROGRAMMING" : {
          "WEB": "#web",
          "DESKTOP": "#desktop",
          "ALGORITHMS": "#mathnalgo",
        },
        "COMPUTER GRAPHICS" : {
          "2D ARTS": "#2d",
          "3D ARTS": "#3d",
          "DESIGNS": "#design",
        },
        "MATHEMATICS" : {
          "PHYSICS": "#physics",
          "GEOMETRY": "#geometry",
          "MATH": "#math",
        },
        "ENGINEERING" : {
          "CIRCUIT DESIGN": "#circuits",
          "LOGIC DESIGN" : "#logic",
          "RESEARCH": "#research",
        },
      }
    };

    this.toggleCliked = this.toggleCliked.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(event) {
    console.log(event.target.name);
    
    //close nav
    this.toggleCliked();
  }


  toggleCliked(){
    this.setState({
      toggledDown: !this.state.toggledDown,
    });
  }

  //handling general scroll event
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

    if( this.state.scrollTopPX  < 5 ){
      this.setState({onPageTop : true});
    } else {
      this.setState({onPageTop : false});
    }
  }
  //handling general scroll event



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
        navItems.push(<a key={b+"_b"} name={b} onClick={this.handleNavClick} className="hz-nvlink" href={this.state.Skills[a][b]}><span key={b+"_c"} className="H-NvLink" >{b}</span></a>);
      }
      navGroup.push(<div key={a+"_d"}><div className="hz-navbar-list" key={a+"_e"}>{navItems}</div><hr style={{opacity : "10%"}} key={a+"_f"}></hr></div>);
    }

    for (var i = 0; i < navGroup.length; i++) {
      if(i%2===0){
        navColumns1.push(navGroup[i]);
      } else {
        navColumns2.push(navGroup[i]);
      }
    }



    //toggle

    return (
      <div>


        <div className="hz-row-unresponsive">
        
          <div className="hz-column">
            <a href="#home" className={this.state.onPageTop&&!this.state.toggledDown ? "hz-navbar-brand-topped":"hz-navbar-brand"}><img className={this.state.onPageTop&&!this.state.toggledDown ? "hz-navbar-logo-topped":"hz-navbar-logo"} src={hzLogo} alt="Hanz Aquino Brand Logo" />{this.state.myName}</a>
          </div>
          <div className="hz-column">


          <div className="hz-navbar-agroup">
            <a href="#resume" className={this.state.onPageTop||this.state.toggledDown ? "hz-navbar-agroup-link":"hz-navbar-agroup-link-scrolled"}><i className="bi-file-earmark-text" /><span>&nbsp;Resume</span></a>
            <a href="#contactme" className={this.state.onPageTop||this.state.toggledDown ? "hz-navbar-agroup-link":"hz-navbar-agroup-link-scrolled"}><i className="bi-telephone" /><span>&nbsp;Contact</span></a>
          </div>

          


          <button className="hz-navbar-toggle H-NvToggle" onClick={this.toggleCliked}>
            <span>
              <div className={this.state.toggledDown ? "hz-navbar-chevron-animated":"hz-navbar-chevron"}><span className="bi-chevron-down"></span></div>
            </span>
          </button>
          </div>
          &nbsp;
        </div>


        <div className="hz-navbar H-Navbar" id="hzNavBar" style={this.state.toggledDown ? {height: "100%"}:{height: (this.state.onPageTop||this.state.scrollingToTop ? "0%":"48px")}}>

          <div className="hz-navbar-collapse">
            <div className={this.state.toggledDown ? "hz-column navCol1":"hz-column"} align="center">
              {navColumns1}
            </div>
            <div className={this.state.toggledDown ? "hz-column navCol2":"hz-column"} align="center">
              {navColumns2}
            </div>  
          </div>

          

        </div>


      </div>
    );
  }
  
}

export default NavView;
