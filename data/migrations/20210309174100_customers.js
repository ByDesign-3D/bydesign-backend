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
            .notNullable()
            .defaultTo(false)
        table.text("username")
            .notNullable()
            .unique()
        table.text("password")
            .notNullable()
        table.string("phone_number", 15)
        table.text("street_address")
            .notNullable()
        table.text("city")
            .notNullable()
        table.text("state")
            .notNullable()
        table.text("zip_code")
            .notNullable()
        table.text("billing_address")
        table.timestamp("account_created")
            .notNullable()
            .defaultTo(knex.fn.now())

    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("customers")

};
