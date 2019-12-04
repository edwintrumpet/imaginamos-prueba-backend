const MongoLib = require('../lib/mongo');

class DriversService {
  constructor() {
    this.collection = 'drivers';
    this.mongoDB = new MongoLib();
  }

  async getDrivers() {
    const drivers = await this.mongoDB.get(this.collection, {}, {});
    return drivers || [];
  }

  async createDriver(driver) {
    const createdDriverId = await this.mongoDB.create(this.collection, driver);
    return createdDriverId;
  }
}

module.exports = DriversService;
