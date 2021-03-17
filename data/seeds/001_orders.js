const faker = require('faker');


const orders = [...new Array(10)].map((i, idx) => ({
  id: faker.random.uuid(),
  customer_id: 'e155e7ba-8d64-451b-bbb5-ce3ae960ade2'
}))

exports.seed = async (knex) => {
  // Insert customers profiles
  await knex('orders').insert(orders);

};
