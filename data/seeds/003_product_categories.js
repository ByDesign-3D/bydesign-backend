const faker = require('faker');

exports.seed = async function (knex) {
  await knex('product_categories').insert([{
    id: 1,
    name: "Miscellaneous",
    tagline: "Random products yet to be put into a category.",
    description: faker.commerce.productDescription(),
    image_url: "https://unsplash.com/photos/FB1vd3XT_zQ",
    video_url: "https://youtu.be/Ac5ksZTvZN8",
  },
  {
    id: 2,
    name: "Kitchen Utensils",
    tagline: "Use them everyday!",
    description: faker.commerce.productDescription(),
    image_url: "https://unsplash.com/photos/yIaRpl_-Smw",
    video_url: "https://youtu.be/W5O7TRTpesM",
  },
  {
    id: 3,
    name: "Disney",
    tagline: "Where Dreams Come True",
    description: faker.commerce.productDescription(),
    image_url: "https://unsplash.com/photos/BLYq8Qk8Q98",
    video_url: "https://youtu.be/cPAbx5kgCJo",
  },
]);
};