const express = require('express');
const { deliveriesMock } = require('../utils/mocks');

const deliveriesRoutes = (app) => {
  const router = express.Router();
  app.use('/api/deliveries', router);

  router.get('/', async (req, res, next) => {
    try {
      const deliveries = await Promise.resolve(deliveriesMock);
      res.status(200).json({ data: deliveries, message: 'deliveries listed' });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    try {
      const createdDeliveryId = await Promise.resolve(deliveriesMock[0].id);
      res.status(201).json({ data: createdDeliveryId, message: 'delivery created' });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = deliveriesRoutes;
