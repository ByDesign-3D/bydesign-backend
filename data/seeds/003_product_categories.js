const faker = require('faker');

exports.seed = async function (knex) {
  // Insert customers profiles
  await knex('product_categories').insert([{
    name: "Miscellaneous",
    tagline: "Random products yet to be put into a category.",
    description: faker.commerce.productDescription(),
    image: faker.image.image(),
    image_url: "https://unsplash.com/photos/FB1vd3XT_zQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    video_url: "https://youtu.be/Ac5ksZTvZN8",
  },
  {
    name: "Kitchen Utensils",
    tagline: "Use them everyday!",
    description: faker.commerce.productDescription(),
    image: faker.image.image(),
    image_url: "https://unsplash.com/photos/yIaRpl_-Smw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    video_url: "https://youtu.be/W5O7TRTpesM",
  },
  {
    name: "Disney",
    tagline: "Where Dreams Come True",
    description: faker.commerce.productDescription(),
    image: faker.image.image(),
    image_url: "https://unsplash.com/photos/BLYq8Qk8Q98?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    video_url: "https://youtu.be/cPAbx5kgCJo",
  },
]);
};