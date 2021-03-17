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
        table.binary("image")
        table.string("phone_number")
        table.text("street_address")
            .notNullable()
        table.text("city")
            .notNullable()
        table.text("state")
            .notNullable()
        table.text("zip_code")
            .notNullable()
        table.text("billing_street_address")
        table.text("billing_city")
        table.text("billing_state")
        table.text("billing_zip_code")
        table.timestamp("account_created_timestamp")
            .notNullable()
            .defaultTo(knex.fn.now())

    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("customers")

};
