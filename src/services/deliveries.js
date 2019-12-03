const MongoLib = require('../lib/mongo');

class DeliveriesService {
  constructor() {
    this.collection = 'deliveries';
    this.mongoDB = new MongoLib();
  }

  async getDeliveries({ userId, date }) {
    const query = {
      driverId: userId,
      date,
    };
    const deliveries = await this.mongoDB.get(this.collection, query);
    return deliveries || [];
  }

  async createDelivery(delivery) {
    const createdDeliveryId = await this.mongoDB.create(this.collection, delivery);
    return createdDeliveryId;
  }
}

module.exports = DeliveriesService;
