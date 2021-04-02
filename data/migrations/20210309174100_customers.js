exports.up = async function(knex) {
    await knex.schema.createTable("customers", (table) => {
        table.uuid("id")
            .primary()
            .notNullable()
            .unique()
        table.text("first_name")
            .notNullable()
        table.text("last_name")
            .notNullable()
        table.text("email")
            .notNullable()
            .unique()
        table.boolean("email_auth")
            .defaultTo(false)
        table.text("password")
            .notNullable()
        table.binary("image")
        table.string("phone_number")
        table.timestamp("account_created_timestamp")
            .notNullable()
            .defaultTo(knex.fn.now())

    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("customers")

};
