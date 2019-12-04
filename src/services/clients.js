const MongoLib = require('../lib/mongo');

class ClientsService {
  constructor() {
    this.collection = 'clients';
    this.mongoDB = new MongoLib();
  }

  async getClient(email) {
    const query = {
      email,
    };
    const [client] = await this.mongoDB.get(this.collection, query, {});
    return client || {};
  }

  async createClient(client) {
    const createdClientId = await this.mongoDB.create(this.collection, client);
    return createdClientId;
  }

  async getOrCreateClient({
    name, email, phone, address,
  }) {
    let clientId;
    const client = await this.getClient(email);
    if (Object.keys(client).length === 0) {
      clientId = await this.createClient({
        name, email, phone, address: [address],
      });
    } else {
      clientId = client._id;
      const addressExists = client.address.find((item) => item === address);
      if (!addressExists) {
        await this.mongoDB.update(
          this.collection,
          clientId,
          { address: [...client.address, address] },
        );
      }
    }
    return {
      clientId,
      address,
    };
  }
}

module.exports = ClientsService;
