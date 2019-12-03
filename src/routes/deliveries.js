const express = require('express');
const DeliveriesService = require('../services/deliveries');

const deliveriesRoutes = (app) => {
  const router = express.Router();
  app.use('/api/deliveries', router);

  const deliveriesService = new DeliveriesService();

  router.get('/:userId/:date', async (req, res, next) => {
    const { date, userId } = req.params;
    try {
      const deliveries = await deliveriesService.getDeliveries({ userId, date });
      res.status(200).json({ data: deliveries, message: 'deliveries listed' });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: delivery } = req;
    try {
      const createdDeliveryId = await deliveriesService.createDelivery(delivery);
      res.status(201).json({ data: createdDeliveryId, message: 'delivery created' });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = deliveriesRoutes;
