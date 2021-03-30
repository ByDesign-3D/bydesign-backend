exports.up = async function(knex) {
    await knex.schema.createTable("employees", (table) => {
        table.uuid("id")
            .primary()
            .defaultTo(knex.raw('uuid_generate_v4()'))
        table.text("first_name")
            .notNullable()
        table.text("last_name")
            .notNullable()
        table.text("title")
        table.text("email")
            .notNullable()
            .unique()
        table.string("phone_number")
        table.integer("auth_level").defaultTo(1000)
        table.binary("image")
        table.text("username")
            .notNullable()
            .unique()
        table.text("password")
            .notNullable()
        
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("employees")

};
