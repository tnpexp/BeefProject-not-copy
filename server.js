const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.use('*',function (req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
})

const server = app.listen(8081, function(){
    const port = server.address().port;
    console.log("Server is running.. at port: %s", port);
})

// server.js

var express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');

      const app = express();
      var port = process.env.PORT || 4000;

      var server = app.listen(function(){
        console.log('Listening on port ' + port);
      });
