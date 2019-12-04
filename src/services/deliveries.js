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
    this.months = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
  }

  async getDeliveries({ userId, date }) {
    let deliveryDate;
    const query = {
      driverId: ObjectId(userId),
    };
    if (date.year && date.month && date.day) {
      deliveryDate = {
        $gte: new Date(date.year, this.months[date.month], date.day),
        $lte: new Date(date.year, this.months[date.month], date.day, 23, 59),
      };
      query.deliveryDate = deliveryDate;
    } else if (date.year && date.month) {
      deliveryDate = {
        $gte: new Date(date.year, this.months[date.month]),
        $lte: new Date(date.year, this.months[date.month] + 1, 0, 23, 59),
      };
      query.deliveryDate = deliveryDate;
    } else if (date.year) {
      deliveryDate = {
        $gte: new Date(date.year, 0),
        $lte: new Date(date.year, 11, 31, 23, 59),
      };
      query.deliveryDate = deliveryDate;
    }
    const options = {
      sort: {
        deliveryDate: 1,
        waitTime: 1,
      },
    };
    const deliveries = await this.mongoDB.get(this.collection, query, options);
    return deliveries || [];
  }

  async createDelivery(delivery) {
    const {
      name,
      email,
      phone,
      address,
      waitTime,
      deliveryDate: {
        year, month, day, hour, minute,
      },
    } = delivery;
    const deliveryDate = new Date(year, this.months[month], day, hour, minute);
    const promises = [
      this.clientsService.getOrCreateClient({
        name, email, phone, address,
      }),
      this.driversService.getDrivers(),
    ];
    const [client, driversList] = await Promise.all(promises);
    const assignedDriver = driversList[Math.floor(Math.random() * driversList.length)];
    const data = {
      clientId: client.clientId,
      driverId: assignedDriver._id,
      address: client.address,
      deliveryDate,
      waitTime,
      status: 'confirmado',
    };
    const createdDeliveryId = await this.mongoDB.create(this.collection, data);
    return createdDeliveryId;
  }
}

module.exports = DeliveriesService;
