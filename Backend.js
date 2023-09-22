const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

// Serve static files (optional)
// app.use(express.static('public'));

// WebSocket route
app.ws('', (ws, req) => {
  console.log('WebSocket connection established.');

  // Handle incoming WebSocket messages
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Send a response message (you can customize this)
    ws.send(`You sent: ${message}`);
  });

  // Handle WebSocket disconnect
  ws.on('close', () => {
    console.log('WebSocket connection closed.');
  });
});

// Start the Express server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
