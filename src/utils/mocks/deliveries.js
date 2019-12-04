/* eslint-disable class-methods-use-this */
const deliveriesMock = [{
  _id: 'e592f7971dffe9e4f16ae7fb',
  clientId: 'f9e6fff6fff173df726f258f',
  driverId: 'df0e3ff7f1f7cfe7fee916e3',
  address: '758 Hintze Hill',
  deliveryDate: '2019-12-03T04:08:55.000Z',
  waitTime: 4,
  status: 'confirmado',
}, {
  _id: 'a3855fefe8d727c3eefffffe',
  clientId: '1efff21d0fc61e7b6ef1fe58',
  driverId: 'eb327e80f9cfeffd2875ff80',
  address: '31 Acker Place',
  deliveryDate: '2019-12-04T17:59:37.000Z',
  waitTime: 8,
  status: 'confirmado',
}, {
  _id: '64f55e5e3ed5bf6cdefe5048',
  clientId: 'e5f20e0ae2ff932f02b40eff',
  driverId: 'feff31e2379d6f7e8f17f1de',
  address: '78725 Hudson Point',
  deliveryDate: '2019-12-03T19:26:14.000Z',
  waitTime: 6,
  status: 'confirmado',
}, {
  _id: 'fe5290ecf03d6eff1f3f2fff',
  clientId: 'e8a904fa67d9b11584ffedbc',
  driverId: '618558ffefe02ff7bd834ff4',
  address: '02486 Mendota Junction',
  deliveryDate: '2019-12-05T08:56:12.000Z',
  waitTime: 2,
  status: 'confirmado',
}, {
  _id: '9a6106f408e894fe230e80f1',
  clientId: 'f0fdff260e111f7fd1322db0',
  driverId: 'f0208291f35767f7f61e79ff',
  address: '491 Independence Terrace',
  deliveryDate: '2019-12-05T09:57:25.000Z',
  waitTime: 2,
  status: 'confirmado',
}, {
  _id: 'f4eff5e4276d7fee82b7e79e',
  clientId: 'f100f531c7f58fe8c6f36fd0',
  driverId: 'ff78ddfccefa2dffe2307fcd',
  address: '79 Manufacturers Center',
  deliveryDate: '2019-12-05T07:11:26.000Z',
  waitTime: 8,
  status: 'confirmado',
}, {
  _id: 'f6e442fffef9316f11881fee',
  clientId: '46de66327be1da0f56ff58e0',
  driverId: 'fff285dfe4cc717f9e604f87',
  address: '25778 Carpenter Junction',
  deliveryDate: '2019-12-04T12:05:24.000Z',
  waitTime: 6,
  status: 'confirmado',
}, {
  _id: 'f28785f5ff62c5f154f6efff',
  clientId: 'da9e68fff4688e8f23fb8d1f',
  driverId: 'ff87501e1f1c239e13e29efd',
  address: '49458 Aberg Way',
  deliveryDate: '2019-12-04T16:33:54.000Z',
  waitTime: 6,
  status: 'confirmado',
}, {
  _id: 'f8484f24e2f5a4f4fe7dff5f',
  clientId: '0e311fdeff3e390cf0ff7f19',
  driverId: '1fce0dfdceff9e8ffec7fff6',
  address: '2267 Merry Hill',
  deliveryDate: '2019-12-04T17:38:42.000Z',
  waitTime: 5,
  status: 'confirmado',
}, {
  _id: '367ffee3eaa672d87cfdd1ea',
  clientId: 'fcff42cef4e2d17efc85f1e4',
  driverId: '00e1f2cfeffcf3f2851e5e5f',
  address: '31 Mandrake Terrace',
  deliveryDate: '2019-12-04T23:01:58.000Z',
  waitTime: 5,
  status: 'confirmado',
}];

class DeliveriesServiceMock {
  async getDeliveries() {
    return Promise.resolve(deliveriesMock);
  }

  async createDelivery() {
    return Promise.resolve(deliveriesMock[0]._id);
  }
}

module.exports = {
  deliveriesMock,
  DeliveriesServiceMock,
};
