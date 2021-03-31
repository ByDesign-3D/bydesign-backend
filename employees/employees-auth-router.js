const express = require("express")
const Employees = require("./employees-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = express.Router()

router.post("/register", async (req, res, next) => {
    try {
        const { username, password, first_name, last_name, email } = req.body
        const employeeUserName = await Employees.findBy({ username }).first()

        if (employeeUserName) {
            return res.status(409).json({
                message: "Sorry, that username already exists. Please choose a new username."
            });
        }
        if ( username && password && first_name && last_name && email ) {
            const newEmployee = await Employees.add({ username, password, first_name, last_name, email });
            return res.status(201).json(newEmployee)
        } else {
            return res.status(500).json({ message: "Missing one or more credentials." })
        }
    } catch(err) {
        next(err)
    }
})


router.post("/login", async (req, res, next) => {
    const authError = {
        message: "Invalid Credentials.",
    }
    try {
        const employee = await Employees.findBy({ username: req.body.username }).first()
        if (!employee) {
            return res.status(401).json(authError)
        }
        // const hashedPassword = await bcrypt.hash(req.body.password, 14)
        const passwordValid = await bcrypt.compare(req.body.password, employee.password)
        if (!passwordValid) {
            return res.status(401).json(authError)
        }
        const tokenPayload = {
            employeeId: employee.id,
            employeeAuthLevel: employee.auth_level,
        }
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET)
        res.cookie("token", token)

        res.json({
            message: `Welcome ${employee.username}!`,
            token: token,
        })

    } catch(err) {
        next(err)
    }
})

module.exports = router