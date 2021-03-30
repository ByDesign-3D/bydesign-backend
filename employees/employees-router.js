const express = require("express")
const Employees = require("./employees-model")
const bcrypt = require("bcryptjs")
const restricted = require('../auth-middleware');



const router = express.Router()

// const restricted = require("../auth/authenticate-middleware")



////////////// This is for the /employees endpoint and will only be available to logged-in employees once we create and call the `restrict` middleware. //////////////




//////////////    /employees    //////////////
//*******    Not sure that this is needed *******//

router.get("/", async (req, res, next) => {
	try {
		if (req.decodedToken.employeeAuthLevel <= 5 ) {
			return res.json(await Employees.find())
		} else {
			return res.status(400).json({ message: "You are not authorized."})
		}
	} catch(err) {
		next(err)
	}
})


//////////////    /employees/:id    //////////////

router.get("/:id", async (req, res, next) => {
	try {
        const employee = await Employees.findById(req.params.id)

        if(!employee) {
            return res.status(404).json({
                errorMessage: "The employee with that id cannot be found."
            })
        } else if (req.decodedToken.employeeAuthLevel <= 5 ) {
			return res.status(200).json(employee)
		} else if (req.decodedToken.employeeId === req.params.id) {
			return res.status(200).json(employee)
		} else {
			return res.status(400).json({ message: "You are not authorized."})
		}
        
		
	} catch(err) {
		next(err)
	}
})


router.put("/:id", async (req, res, next) => {
	try {
	  const pass = await bcrypt.hash(req.body.password, 14)
	  const employee = await Employees.update({
		  first_name: req.body.first_name, 
		  last_name: req.body.last_name, 
		  email: req.body.email, 
		  phone_number: req.body.phone_number,
		  username: req.body.username, 
		  password: pass 
		}, req.decodedToken.employeeId)
		res.status(200).json(employee)
	} catch (err) {
	  next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	try{
		const employee = await Employees.remove(req.params.id)

		if (req.decodedToken.employeeAuthLevel <= 2 ) {
			return res.status(410).json(employee)
		} else {
			return res.status(400).json({ message: "You are not authorized."})
		}
	} catch (err) {
		next(err)
	}
})



module.exports = router