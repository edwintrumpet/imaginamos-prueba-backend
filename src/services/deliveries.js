const { deliveriesMock } = require('../utils/mocks');

class DeliveriesService {
  async getDeliveries() {
    const deliveries = await Promise.resolve(deliveriesMock);
    return deliveries || [];
  }

  async createDelivery() {
    const createdDeliveryId = await Promise.resolve(deliveriesMock[0].id);
    return createdDeliveryId;
  }
}

module.exports = DeliveriesService;
