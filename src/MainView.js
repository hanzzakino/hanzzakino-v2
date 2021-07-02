import './MainView.css';

import React from 'react';
import NavView from './NavView';

class MainView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myName : "Hanz Aquino",
    };

  }

  render() {
    return (
      <div className="MainView">
        <NavView />
        <div className="container">
          <br />
          <p>Hanz Aquino</p>
        </div>
      </div>
    );
  }

}

export default MainView;
