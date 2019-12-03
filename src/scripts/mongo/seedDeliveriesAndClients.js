// DEBUG=app* node src/scripts/mongo/seedDeliveriesAndClients.js

// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');
const debug = require('debug')('app:scripts:drivers');
const DeliveriesService = require('../../services/deliveries');
const { postDeliveries } = require('../../utils/mocks');

const seedDrivers = async () => {
  try {
    const deliveriesService = new DeliveriesService();
    for (let i = 0; i < postDeliveries.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await deliveriesService.createDelivery(postDeliveries[i]);
    }
    debug(chalk.green(`${postDeliveries.length} deliveries have been created succesfully`));
    return process.exit(0);
  } catch (err) {
    debug(chalk.red(err));
    return process.exit(1);
  }
};

seedDrivers();
