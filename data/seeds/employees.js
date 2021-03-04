const bcrypt = require("bcryptjs")
const hash = async (password) => await bcrypt.hash(password, 12)
exports.seed = async function (knex) {
    await knex("employees").insert([
        { id: "e30f7e26-d29c-4e2a-a837-f0bbc08b6fa0", first_name: "Eric", last_name:"Alsop", username: "eric1", password: `${await hash('password')}`, title: "CEO", auth_level: 1 },
    ])
};