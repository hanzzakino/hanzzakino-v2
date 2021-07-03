import './ContentView.css';

import React from 'react';

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
        <p>Hanz</p>
      </div>
    );
  }

}

export default ContentView;
