import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.localVideoRef = React.createRef();
  }

  render() {
    const constraints = { video: true };

    const success = (stream) => {
      this.localVideoRef.current.srcObject = stream;
    };

    const failure = (err) => {
      console.log('getUserMedia Error: ', err);
    }

    navigator.mediaDevices.getUserMedia(constraints)
      .then(success)
      .catch(failure);

    return (
      <div>
        <video
          ref={this.localVideoRef}
          autoPlay></video>
      </div>
    );
  }
}

export default App;
