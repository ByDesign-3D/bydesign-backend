exports.seed = async function(knex) {
	await knex("customers").delete()
	await knex("employees").truncate()
	await knex("packing_materials").delete()
	await knex("shipping_boxes").delete()
	await knex("product_categories").delete()
	await knex("product_sub_categories").delete()
	await knex("products").truncate()

}