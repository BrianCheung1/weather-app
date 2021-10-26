const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 5000;

// Middleware to debug requests
app.use(morgan('tiny'))

// create a GET route
app.get('/backend', (req, res) => {
  console.log("GET /backend")
  res.send("Backend Connected");
}); 

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));