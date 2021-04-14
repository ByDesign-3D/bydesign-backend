exports.up = async function(knex) {
    await knex.schema.createTable("shipping_boxes", (table) => {
        table.increments("id")
            .primary()
        table.text("brand")
        table.text("size")
            .notNullable()
        table.integer("amount_in_stock")
            .defaultTo(0)
        table.text("units_of_measure")
        table.decimal("cost_per_each")
            .defaultTo(0)
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("shipping_boxes")

};
