const { ObjectId } = require('mongodb');
const MongoLib = require('../lib/mongo');
const ClientsService = require('./clients');
const DriversService = require('./drivers');

class DeliveriesService {
  constructor() {
    this.collection = 'deliveries';
    this.mongoDB = new MongoLib();
    this.clientsService = new ClientsService();
    this.driversService = new DriversService();
  }

  async getDeliveries({ userId, date }) {
    const query = {
      driverId: ObjectId(userId),
      deliveryDate: new Date(date),
    };
    const options = {
      sort: {
        deliveryTime: 1,
      },
    };
    const deliveries = await this.mongoDB.get(this.collection, query, options);
    return deliveries || [];
  }

  async createDelivery(delivery) {
    const promises = [
      this.clientsService.getOrCreateClient(delivery),
      this.driversService.getDrivers(),
    ];
    const [client, driversList] = await Promise.all(promises);
    const assignedDriver = driversList[Math.floor(Math.random() * driversList.length)];
    const data = {
      clientId: client.clientId,
      driverId: assignedDriver._id,
      address: client.address,
      deliveryDate: new Date(delivery.deliveryDate),
      deliveryTime: delivery.deliveryTime,
      status: 'confirmado',
    };
    const createdDeliveryId = await this.mongoDB.create(this.collection, data);
    return createdDeliveryId;
  }
}

module.exports = DeliveriesService;
