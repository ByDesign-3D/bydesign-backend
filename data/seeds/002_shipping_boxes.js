exports.seed = async function (knex) {
  await knex('shipping_boxes').insert([{
    id: 1,
    brand: "USPS",
    size: "Medium",
    amount_in_stock: 15,
    cost_per_each: 1.25
    
  },
  {
    id: 2,
    brand: "UPS",
    size: "Jumbo",
    amount_in_stock: 5,
    cost_per_each: 13.75,
  },
  {
    id: 3,
    brand: "Found on Side of Road",
    size: "12 X 16 X 6",
    units_of_measure: "Inches",
  },
]);
};