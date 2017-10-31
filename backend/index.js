'use strict';

const assert = require('assert');

const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');

const fs = require('fs');

const response = fs.readFileSync('./books.json', {'encoding': 'utf8'});

const server = new hapi.Server();
server.connection({
  host: process.env.IP || 'localhost',
  port: process.env.PORT || 3000
});

server.register([inert, vision], (err) => {
  assert(!err, err);

  server.start((err) => {
    assert(!err, err);
    console.log(`Server running at: ${server.info.uri}`);
  });
});

server.route({
    method: 'GET',
    path: '/books',
    handler: function (request, reply) {
        reply(JSON.parse(response));
    }
});
