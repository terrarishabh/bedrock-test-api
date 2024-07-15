const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get('/1', (req, res) => {
    const response = {
        message: '1000'
    };
    
    res.json(response);
});

app.get('/2', (req, res) => {
    const response = {
        message: '2000'
    };
    
    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
