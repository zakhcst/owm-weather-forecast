var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');

app.use(morgan(':date :remote-addr :status :method :response-time ms :url :user-agent'));

app.use(express.static(path.resolve('../src/firebase/dist')));
 
app.listen(3000, () => {
    console.log('started at port 3000');
});