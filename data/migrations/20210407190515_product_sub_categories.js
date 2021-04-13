exports.up = async function(knex) {
    await knex.schema.createTable("product_sub_categories", (table) => {
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
        table.integer("category_id")
            .references("id")
            .inTable("product_categories")
            .notNullable()
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("product_sub_categories")

};
