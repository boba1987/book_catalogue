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
  port: process.env.PORT || 3000,
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
    path: '/books',
    handler: function (request, reply) {
        const books = JSON.parse(response);
        // If book title is provider, filter by title
        if (request.query.title) {
          let toReturn = {};

          for (let book in books) {
            if (books[book].title.toLowerCase().indexOf(request.query.title.toLowerCase()) != -1) {
              toReturn[book] = books[book];
            }
          }

          return reply(toReturn);
        }

        reply(books);
    }
});
