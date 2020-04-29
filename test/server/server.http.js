const HTTP_PORT = 8012;
const http = require('http');
const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
const AliceDBTable = require('./class/AliceDBTable').default
const httpServer = http.createServer();
httpServer.listen(HTTP_PORT, '0.0.0.0');

// ----------------------------------------------------------------------------------------

// Create a server for handling websocket calls
const wss = new WebSocketServer({server: httpServer});
const DbTables = []

wss.on('connection', ws => {

  const sendMessage = (message, data) => ws.send(JSON.stringify({
    message,
    data
  }))

  ws.on('message', message => {
    const decodedMessage = JSON.parse(message)
    console.log('received: ', message);

    switch ( true ) {
      case decodedMessage.message === 'create-table':
        if (DbTables[decodedMessage.data]) {
          sendMessage('on-created-table-error', `Table [${decodedMessage.data}] already exists...`)
        } else {
          DbTables[decodedMessage.data] = new AliceDBTable(decodedMessage.data)
          sendMessage('on-created-table-success', decodedMessage.data)
        }
        break
      case decodedMessage.message === 'table-get-all-records':
        if (!DbTables[decodedMessage.data.tableName]) {
          sendMessage('on-table-get-all-records-error', `Table [${decodedMessage.data.tableName}] does not exists...`)
        } else {
          sendMessage('on-table-get-all-records-success', DbTables[decodedMessage.data.tableName].getAll())
        }
        break
      case decodedMessage.message === 'table-add-record':
        if (!DbTables[decodedMessage.data.tableName]) {
          sendMessage('on-table-added-record-error', `Table [${decodedMessage.data.tableName}] doe not exists...`)
        } else {
          DbTables[decodedMessage.data.tableName]
          .add(decodedMessage.data.record)
          .then(newRow => {
            sendMessage('on-table-added-record-success', newRow)
          })
          .catch(erro => {
            sendMessage('on-table-added-record-error', error)
          })
        }
        break
    }
  });

  ws.onclose = event =>  {
      console.log('on close')
  };

});


console.log('Server running on Port:' + HTTP_PORT  );
