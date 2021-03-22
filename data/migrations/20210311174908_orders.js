exports.up = async function(knex) {
    await knex.schema.createTable("orders", (table) => {
        table.uuid("id")
            .primary()
            .notNullable()
            .unique()
        table.timestamp("timestamp")
            .notNullable()
            .defaultTo(knex.fn.now())
        table.uuid("customer_id")
            .notNullable()
            .references("id")
            .inTable("customers")
        table.text("status")
            .notNullable()
            .defaultTo("received")
        table.integer("order_total")
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("orders")

};
