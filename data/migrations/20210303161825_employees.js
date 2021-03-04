exports.up = async function(knex) {
    await knex.schema.createTable("employees", (table) => {
        table.uuid("id")
        table.string("first_name")
        table.string("last_name")
        table.string("username").notNullable().unique()
        table.string("password").notNullable()
        table.string("title")
        table.integer("auth_level")

    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("employees")

};
