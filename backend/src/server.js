const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const { user, password } = require('./AcessDB');

const server = express();

mongoose.connect(
    `mongodb+srv://${user}:${password}@omnistack-8-w9gzq.mongodb.net/test?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
);

server.use(cors());

server.use(express.json());
server.use(routes);

server.listen(3333);
