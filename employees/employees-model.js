const bcrypt = require("bcryptjs")
const db = require("../data/db.config")


async function add({ username, password, first_name, last_name, email }) {
	password = await bcrypt.hash(password, 14)

	const [id] = await db("employees").insert({ username, password, first_name, last_name, email }, "id")
	return findById(id)
}

function find() {
	return db("employees")
}

function findBy(filter) {
	return db("employees")
		.where(filter)
}

function findById(id) {
	return db("employees")
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