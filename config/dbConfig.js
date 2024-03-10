const mongoose = require('mongoose');
// console.log(process.env.mongoUrl)
mongoose.connect(process.env.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
});

connection.on('connected', () => {
    console.log('Connected to MongoDB');
    console.log("it excute correctly");
});

module.exports = connection;
