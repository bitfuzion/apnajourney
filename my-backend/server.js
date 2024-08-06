
const express = require('express');
const { connectToMongoDB } = require('./db'); // Adjust the path as necessary

const app = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB
connectToMongoDB().then(() => {
    // Start the server after database connection is established
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Your other middleware and routes go here

module.exports = app;
