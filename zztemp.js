exports.up = async function(knex) {
    await knex.schema.createTable("admin", (table) => {
        table.uuid("id")
        table.text("username").notNullable().unique()
        table.text("password").notNullable()
    })

    await knex.schema.createTable("business_info", (table) => {
        table.string("name").notNullable()
        table.string("tagline")
        table.text("description")
        table.text("bio")
        table.text("business_hours")
        table.string("email")
        table.string("phone_number")
    })

    await knex.schema.createTable("customers", (table) => {
        table.increments()
        table.text("username").notNullable().unique()
        table.text("password").notNullable()
        table.string("name").notNullable()
        table.string("phone_number").notNullable()
        table.text("shipping_address").notNullable()
    })

    await knex.schema.createTable("categories", (table) => {
        table.increments()
        table.string("name").notNullable()
        table.string("tagline")
        table.text("description")
        table.text("bio")

    })

    await knex.schema.createTable("sub_categories", (table) => {
        table.increments()
        table.string("name").notNullable()
        table.string("tagline")
        table.text("description")
        table.text("bio")

    })

    await knex.schema.createTable("filament_types", (table) => {
        table.increments()
        table.string("type").notNullable()
        table.text("description")

    })

    await knex.schema.createTable("sizes", (table) => {
        table.increments()
        table.integer("size").notNullable()
    })

    await knex.schema.createTable("colors", (table) => {
        table.increments()
        table.integer("color").notNullable()
        table
            .integer("filament_type")
            .references("id")
            .inTable("filament_types")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("products", (table) => {
        table.increments()
        table.string("name").notNullable()
        table
            .integer("category_id")
            .notNullable()
            .references("id")
            .inTable("categories")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table
            .integer("sub_category_id")
            .notNullable()
            .references("id")
            .inTable("sub_categories")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table
            .integer("color")
            .references("id")
            .inTable("colors")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table
            .integer("size")
            .references("id")
            .inTable("sizes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")


        table.string("image_url")
        table.string("video_url")



    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("products")
  await knex.schema.dropTableIfExists("colors")
  await knex.schema.dropTableIfExists("sizes")
  await knex.schema.dropTableIfExists("filament_types")
  await knex.schema.dropTableIfExists("sub_categories")
  await knex.schema.dropTableIfExists("categories")
  await knex.schema.dropTableIfExists("customers")
  await knex.schema.dropTableIfExists("business_info")
  await knex.schema.dropTableIfExists("admin")

};
