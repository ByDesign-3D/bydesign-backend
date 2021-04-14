exports.up = async function(knex) {
    await knex.schema.createTable("products", (table) => {
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
        table.integer("sub_category_id")
            .references("id")
            .inTable("product_sub_categories")
            .notNullable()
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table.time("print_time")
        table.decimal("filament_used")
        table.integer("shipping_box_used")
            .references("id")
            .inTable("shipping_boxes")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table.integer("packing_material_type")
            .references("id")
            .inTable("packing_materials")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table.decimal("packing_material_used")
        table.decimal("package_weight")
        table.decimal("shipping_cost")
        table.decimal("selling_price")

    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("products")

};
