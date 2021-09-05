const mongoose = require('mongoose');
const logger = require('./logger');

exports.connectToDB = () => {
  const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

  let dbName = DB_NAME;
  if (process.env.NODE_ENV === 'test') dbName += '-test';

  const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${dbName}`;

  const db = mongoose.connection;

  db.on('connected', () => {
    logger.debug(`DB connected with ${connectionString}`);
  });

  db.on('error', (error) => {
    logger.debug(`DB connection failed`);
    logger.debug(error.message);
    process.exit(1);
  });

  db.on('disconnected', () => {
    logger.debug('disconnected');
  });

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

exports.disconnectDB = async () => mongoose.disconnect();
