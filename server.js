require('module-alias/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const { environmentConfig } = require('@configs');
const connectMongoDb = require('@utils/ConnectMongoDB');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'hello' });
});

connectMongoDb()
  .then(() => {
    app.listen(environmentConfig.PORT, () => {
      console.log(`listening on port ${environmentConfig.PORT}`);
    });
  }).catch(() => {
    console.log('[ERROR] Failed to listen');
    process.exit(1);
  });
