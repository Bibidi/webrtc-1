const express = require('express');

let io = require('socket.io')
({
  path: '/webrtc'
})

const app = express();
const port = 8080;

app.use(express.static(__dirname + '/build'));
app.get('/', (req, res) => res.send('Hello World'));

const server = app.listen(port, () => console.log('Example app listen'));

io.listen(server);

const peers = io.of('/webrtcPeer');

let connectedPeers = new Map();

peers.on('connection', socket => {
  console.log(socket.id);
});