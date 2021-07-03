
import React from 'react';

import './NavView.css';

class NavView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myName : "Hanz Aquino",
    };

  }

  render() {
    return (
      <div>
        <p>Hanz nav</p>
      </div>
    );
  }
  
}

export default NavView;
