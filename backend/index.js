'use strict';

const assert = require('assert');

const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');

const fs = require('fs');

const FilterUtils = require('./filter');

const response = fs.readFileSync('./backend/books.json', {'encoding': 'utf8'});

const server = new hapi.Server();
server.connection({
  host: process.env.IP || 'localhost',
  port: process.env.PORT || 4000,
  routes: { cors: true }
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
    path: '/{param*}',
    handler: {
        directory: {
            path: '../dist',
            listing: true
        }
    }
});

server.route({
    method: 'GET',
    path: '/books',
    handler: function (request, reply) {
        const books = JSON.parse(response);
        if (request.query.olid) { // If olid is provided, filter by it
          return reply(FilterUtils.Filter(['identifiers', 'openlibrary', 0], request.query.olid, books));
        }
        // If book title is provider, filter by title
        return reply(FilterUtils.Filter(['title'], request.query.title, books));
    }
});
