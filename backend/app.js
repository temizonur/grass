const config = require('./utils/config');
const express = require('express');
require('express-async-errors');
const app = express();
const path = require('path');

const cors = require('cors');
const mongoose = require('mongoose');
const lessonsRouter = require('./controllers/lessons');
const teachersRouter = require('./controllers/teachers');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const allRouter = require('./controllers/all');
const commentsRouter = require('./controllers/comments');
const middleware = require('./utils/middleware');
const { MongoMemoryServer } = require('mongodb-memory-server');

// mongoUri =
//   process.env.NODE_ENV === 'test'
//     ? process.env.TEST_MONGODB_URI
//     : process.env.MONGODB_URI;

// console.log('connecting to', mongoUri);

const mongoUri = async () => {
  let mongoUri;
  if (process.env.NODE_ENV === 'test') {
    const mongoServer = new MongoMemoryServer();
    mongoUri = await mongoServer.getConnectionString();
  } else {
    mongoUri = process.env.MONGODB_URI;
  }
  mongoose
    .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('connected to MongoDB');
    })
    .catch((e) => {
      console.log('error connection to MongoDB', e.message);
    });
};

mongoUri();

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.use(middleware.tokenExtractor);

app.use('/api/all', allRouter);
app.use('/api/teachers', teachersRouter);
app.use('/api/lessons', lessonsRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/comments', commentsRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
