const mongoose = require("mongoose");
require('dotenv').config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log('Error:- ' + err));

module.exports = mongoose.connection;
