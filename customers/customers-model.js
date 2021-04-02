const bcrypt = require("bcryptjs")
const db = require("../data/db.config")


async function add({ email, password, first_name, last_name }) {
	password = await bcrypt.hash(password, 14)

	const [id] = await db("customers").insert({ email, password, first_name, last_name }, "id")
	return findById(id)
}

function find() {
	return db("customers")
}

function findBy(filter) {
	return db("customers")
		.where(filter)
}

function findById(id) {
	return db("customers")
		.where({ id })
		.first()
}

const update = async (changes, id) => {
    await db("customers")
    .update(changes)
    .where({ id })
	return findBy({ id })
}

function remove(id){
    return db("customers")
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