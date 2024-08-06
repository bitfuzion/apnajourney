const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb+srv://apnaj:<password>@cluster0.dz5wsg9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

let db;

async function connectToMongoDB() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        db = client.db('apna1'); // Replace with your database name
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

function getDB() {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
}

module.exports = { connectToMongoDB, getDB };
