const faker = require('faker');

exports.seed = async function (knex) {
  await knex('product_sub_categories').insert([{
    id: 1,
    category_id: 1,
    name: "Random",
    tagline: "Hyper active hyper drive.",
    description: faker.commerce.productDescription(),
    image_url: "https://unsplash.com/photos/8yCmQODY2SY",
    video_url: "https://youtu.be/-9r7ezjl1us",
  },
  {
    id: 2,
    category_id: 2,
    name: "Forks",
    tagline: "Forks are better than spoons.",
    description: faker.commerce.productDescription(),
    image_url: "https://unsplash.com/photos/nd-3jzIYwjw",
    video_url: "https://youtu.be/pGX4vs2cDTw",
  },
  {
    id: 3,
    category_id: 3,
    name: "Princesses",
    tagline: "When you wish upon a star.",
    description: faker.commerce.productDescription(),
    image_url: "https://unsplash.com/photos/-v4PyrA3Ez0",
    video_url: "https://youtu.be/0mTUQTEIcOc",
  },
]);
};