const mongoose = require('mongoose');

mongoose.connect(process.env.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connect = mongoose.connection;

connect.on('error', () => {
    console.log(`Error while connecting to database`);
});

connect.on('connected', () => {
    console.log(`Connected to database`);
});
module.exports = connect;