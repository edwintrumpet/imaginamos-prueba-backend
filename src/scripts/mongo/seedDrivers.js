// DEBUG=app* node src/scripts/mongo/seedDrivers.js

// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');
const debug = require('debug')('app:scripts:drivers');
const MongoLib = require('../../lib/mongo');
const { driversMock } = require('../../utils/mocks');

const seedDrivers = async () => {
  try {
    const mongoDB = new MongoLib();
    const promises = driversMock.map(async (driver) => {
      await mongoDB.create('drivers', driver);
    });
    await Promise.all(promises);
    debug(chalk.green(`${promises.length} drivers have been created succesfully`));
    return process.exit(0);
  } catch (err) {
    debug(chalk.red(err));
    return process.exit(1);
  }
};

seedDrivers();
