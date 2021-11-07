import './MainView.css';
import React from 'react';
import NavView from './NavView';
import ContentView from './ContentView';

class MainView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myName : "Hanz Aquino",
    };

  }

  render() {

    document.title = "Hanz Aquino";

    //this must not return full html src
    return (
      <div className="MainView">
        <NavView />
        <br /><br />
        <ContentView />
      </div>
    );
  }

}

export default MainView;
