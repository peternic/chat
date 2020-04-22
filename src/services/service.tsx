const url = 'ws://localhost:8080';

const messageFetcher = (sendMessage: Function) => {
  const connection = new WebSocket(url);

  connection.onopen = () => {
    console.log('Connection created');
  };

  connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`);
  };

  connection.onmessage = (e) => {
    console.log(e.data);
    sendMessage(JSON.parse(e.data));
  };
};

export default messageFetcher;
