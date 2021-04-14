exports.up = async function(knex) {
    await knex.schema.createTable("product_categories", (table) => {
        table.increments("id")
            .primary()
        table.text("name")
            .notNullable()
            .unique()
        table.text("tagline")
        table.text("description")
        table.binary("image")
            .unique()
        table.text("image_url")
            .unique()
        table.binary("video")
            .unique()
        table.text("video_url")
            .unique()
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("product_categories")

};
