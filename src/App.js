import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.localVideoRef = React.createRef();
  }

  render() {
    const constraints = { video: true };

    navigator.getUserMedia( constraints, success, failure );

    return (
      <div>
        <video ref={this.localVideoRef} autoPlay></video>
      </div>
    );
  };
}

export default App;
