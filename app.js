// подключение express
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const PORT = config.get('port') || 5000;
const app = express();

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT);
  } catch (err) {
    console.log('Cannot connect to database');
    process.exit(1);
  }
};
