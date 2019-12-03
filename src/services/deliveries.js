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
      driverId: userId,
      date,
    };
    const deliveries = await this.mongoDB.get(this.collection, query);
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
      deliveryDate: delivery.deliveryDate,
      deliveryTime: delivery.deliveryTime,
      status: 'confirmado',
    };
    const createdDeliveryId = await this.mongoDB.create(this.collection, data);
    return createdDeliveryId;
  }
}

module.exports = DeliveriesService;
