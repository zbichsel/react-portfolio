const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(uri, { useUnifiedTopology: true, useNewParser: true })
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log('Error:- ' + err));

module.exports = mongoose.connection;
