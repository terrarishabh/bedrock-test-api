// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const port = 3000; // Choose any port number you like

// Define a route handler for the root path
app.get('/1', (req, res) => {
    // Create a JSON response
    const response = {
        message: '1000'
    };
    
    // Send the JSON response
    res.json(response);
});

app.get('/2', (req, res) => {
    // Create a JSON response
    const response = {
        message: '2000'
    };
    
    // Send the JSON response
    res.json(response);
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
