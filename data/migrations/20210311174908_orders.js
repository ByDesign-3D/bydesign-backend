exports.up = async function(knex) {
    await knex.schema.createTable("orders", (table) => {
        table.uuid("id")
            .primary()
            .notNullable()
            .unique()
        table.timestamp("timestamp")
            .notNullable()
            .defaultTo(knex.fn.now())
        table.uuid("customer_id").notNullable()
        table.text("status")
            .notNullable()
            .defaultTo("recieved")
        table.integer("order_quantity")
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("orders")

};
