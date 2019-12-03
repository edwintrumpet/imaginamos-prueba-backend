const { MongoClient } = require('mongodb');
const debug = require('debug')('app:db');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const MONGO_URI = `mongo+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err);
          }
          debug('Connected succesfully to mongo');
          resolve(this.client.db(this.dbName));
        });
      });
    }
    return MongoLib.connection;
  }
}

module.exports = MongoLib;
