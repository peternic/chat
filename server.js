const WebSocket = require('ws');
const uuidv4 = require('uuid').v4;

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
  });
  setInterval(() => {
    console.log('sending message');
    ws.send(
      JSON.stringify({
        id: uuidv4(),
        chat: '1',
        user: '1',
        text: 'Hepp',
        timestamp: new Date().getTime(),
      })
    );
  }, 20000);
});
