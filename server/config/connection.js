const mongoose = require('mongoose');

mongoose.connect(proces.env.MONGODB_URI || 'mongodb://localhost/relaxndb', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    ); 
module.exports = mongoose.connection;
    
