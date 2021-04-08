exports.up = async function(knex) {
    await knex.schema.createTable("packing_materials", (table) => {
        table.increments("id")
            .primary()
        table.text("type")
            .notNullable()
        table.decimal("amount_in_stock")
            .defaultTo(0)
        table.text("units_of_measure")
        table.decimal("cost_per_unit_of_measure")
            .defaultTo(0)
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("packing_materials")

};
