const bcrypt = require("bcryptjs")
const db = require("../data/db.config")

async function add(employee) {
	employee.password = await bcrypt.hash(employee.password, 14)

	const [id] = await db("employees").insert(employee)
	return findById(id)
}

function find() {
	return db("employees").select("id", "username")
}

function findBy(filter) {
	return db("employees")
		.select("id", "username", "password")
		.where(filter)
}

function findById(id) {
	return db("employees")
		.select("id", "username")
		.where({ id })
		.first()
}

function update(changes, id){
    return db("employees")
    .update(changes)
    .where({ id })
}

function remove(id){
    return db("employees")
    .where("id", id)
    .del()
}

module.exports = {
	add,
	find,
	findBy,
	findById,
    update,
    remove,
}