exports.seed = async function (knex) {
  await knex('packing_materials').insert([{
    id: 1,
    type: "Bubble Wrap",
    amount_in_stock: 26,
    units_of_measure: "yards",
    cost_per_unit_of_measure: 5.43,
  },
  {
    id: 2,
    type: "Packing Peanuts",
    units_of_measure: "square feet",
  },
  {
    id: 3,
    type: "Paper",
    units_of_measure: "square feet",
  },
]);
};