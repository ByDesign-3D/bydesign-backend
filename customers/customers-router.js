const express = require("express")
const Customers = require("./customers-model")
const bcrypt = require("bcryptjs")


const router = express.Router()


//////////////    /customers    //////////////
//*******    Not sure that this is needed *******//

router.get("/", async (req, res, next) => {
	try {
		if (req.decodedToken.employeeAuthLevel <= 5 ) {
			return res.json(await Customers.find())
		} else {
			return res.status(400).json({ message: "You are not authorized."})
		}
	} catch(err) {
		next(err)
	}
})


//////////////    /customers/:id    //////////////

router.get("/:id", async (req, res, next) => {
	try {
        const customer = await Customers.findById(req.params.id)

        if(!customer) {
            return res.status(404).json({
                errorMessage: "The customer with that id cannot be found."
            })
        } else if (!req.decodedToken.employeeAuthLevel && req.decodedToken.customerId === req.params.id) {
			return res.status(200).json(customer)
		} else if (!req.decodedToken.employeeAuthLevel) {
			return res.status(400).json({ message: "You are not authorized."})
        } else if (req.decodedToken.employeeAuthLevel <= 5 ) {
			return res.status(200).json(customer)
		} else {
			return res.status(400).json({ message: "You are not authorized."})
		}
        
		
	} catch(err) {
		next(err)
	}
})


router.put("/:id", async (req, res, next) => {
	try {


		if ((!req.decodedToken.employeeAuthLevel && req.decodedToken.customerId === req.params.id) || req.decodedToken.employeeAuthLevel <= 5) {
			const pass = await bcrypt.hash(req.body.password, 14)
			const customer = await Customers.update({
				first_name: req.body.first_name, 
				last_name: req.body.last_name, 
				email: req.body.email, 
				phone_number: req.body.phone_number,
				password: pass 
			  }, req.params.id)
			return res.status(200).json(customer)
		} else if (!req.decodedToken.employeeAuthLevel || req.decodedToken.employeeAuthLevel > 5) {
			return res.status(401).json({ message: "You are not authorized."})
        } else {
			return res.status(401).json({ message: "You are not authorized."})
		}

	} catch (err) {
	  next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	try{
		const customer = await Customers.remove(req.params.id)

        if (!req.decodedToken.employeeAuthLevel) {
			return res.status(400).json({ message: "You are not authorized to delete customers."})
        } else if (req.decodedToken.employeeAuthLevel <= 2 ) {
			return res.status(200).json(customer)
		} else {
			return res.status(400).json({ message: "You are not authorized to delete customers."})
		}
	} catch (err) {
		next(err)
	}
})



module.exports = router