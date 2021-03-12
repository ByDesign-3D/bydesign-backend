exports.up = async function(knex) {
    await knex.schema.createTable("employees", (table) => {
        table.uuid("id")
        table.text("first_name")
            .notNullable()
        table.text("last_name")
            .notNullable()
        table.text("title")
        table.text("email")
            .notNullable()
            .unique()
        table.string("phone_number")
        table.integer("auth_level")
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
