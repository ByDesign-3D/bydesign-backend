exports.seed = async function(knex) {
	await knex("customers").delete()
	await knex("orders").truncate()
	await knex("employees").truncate()

}