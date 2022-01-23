import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.localVideoRef = React.createRef();
    this.videoElem = React.createRef();
  }

  render() {
    // const constraints = { video: true };

    // const success = (stream) => {
    //   this.localVideoRef.current.srcObject = stream;
    // };

    // const failure = (err) => {
    //   console.log('getUserMedia Error: ', err);
    // }

    // navigator.mediaDevices.getUserMedia( constraints, success, failure );

    const displayMediaOptions = {
      video: {
        cursor: "always"
      },
      audio: false
    }

    function dumpOptionsInfo() {
      const videoTrack = this.videoEle.current.srcObject.getVideoTracks()[0];
    }

    async function startCapture() {
      try {
        this.videoElem.current.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        dumpOptionsInfo();
      } catch(err) {
        console.error('startCapture Error', err);
      }
    }

    function stopCapture(evt) {
      let tracks = this.videoElem.current.srcObject.getTracks();

      tracks.forEach(track => track.stop());
      this.videoEle.srcObject = null;
    }

    
    return (
      <div>
        <button onClick={() => startCapture()}>Start Capture</button>
        <video ref={this.videoElem} style={{width: '100%'}} autoPlay></video>
      </div>
    );
  };
}

export default App;
