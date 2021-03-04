exports.up = async function(knex) {
    await knex.schema.createTable("fizz", (table) => {
        table.uuid("buzz")
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fizz")

};
