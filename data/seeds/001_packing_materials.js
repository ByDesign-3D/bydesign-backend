exports.seed = async function (knex) {
  // Insert customers profiles
  await knex('packing_materials').insert([{
    type: "Bubble Wrap",
    amount_in_stock: 26,
    units_of_measure: "yards",
    cost_per_unit_of_measure: 5.43,
  },
  {
    type: "Packing Peanuts",
    units_of_measure: "square feet",
  },
]);
};