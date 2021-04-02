const express = require("express")
const Customers = require("./customers-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = express.Router()

router.post("/register", async (req, res, next) => {
    try {
        const { email, password, first_name, last_name } = req.body
        const customerEmail = await Customers.findBy({ email }).first()

        if (customerEmail) {
            return res.status(409).json({
                message: "Sorry, that email already exists. Please login using existing account or choose a new email to create a new account."
            });
        }
        if ( email && password && first_name && last_name ) {
            const newCustomer = await Customers.add({ email, password, first_name, last_name });
            return res.status(201).json(newCustomer)
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
        const customer = await Customers.findBy({ email: req.body.email }).first()
        if (!customer) {
            return res.status(401).json(authError)
        }
        // const hashedPassword = await bcrypt.hash(req.body.password, 14)
        const passwordValid = await bcrypt.compare(req.body.password, customer.password)
        if (!passwordValid) {
            return res.status(401).json(authError)
        }
        const tokenPayload = {
            customerId: customer.id,
        }
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET)
        res.cookie("token", token)

        res.json({
            message: `Welcome ${customer.first_name}!`,
            token: token,
        })

    } catch(err) {
        next(err)
    }
})

module.exports = router