'use strict';

const express = require('express');

const server = express();

server.get('/', (req, res, next) => {
    res.json({ message: 'Hello world!' });
});

server.listen(8000, () => {
    console.log('Express server listening on 8000');
});
