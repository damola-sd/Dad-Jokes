const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userRouter = require('./Routes/user-routes');
const jokeRouter = require('./Routes/jokes-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/user', userRouter);
server.use('/api/jokes', jokeRouter);

server.get('/', (req, res) => {
    res.send(`
      <h2>Dad Jokes APi</h2>
      <p>Welcome to the Dad Jokes API where all the greatest Jokes in the world can be found</p>
      `);
  });

  module.exports = server;