# bydesign-backend
Backend repository for the ByDesign website.

API reference
Deployed on Heroku: http://bydesign-3d.herokuapp.com/

Employee-Auth
Endpoint	| Method	| Body	| Description	| Constraints
----------|---------|-------|-------------|------------
/employee/register	| POST	| { username, password, first_name, last_name, email }	| Sign up a new employee	| Username must be unique;  All credentials must be entered
/employee/login	| POST	| { username , password }	| Log in an existing employee; Returns employee username and token	| 


Customer-Auth
Endpoint	| Method	| Body	| Description	| Constraints
----------|---------|-------|-------------|------------
/customer/register	| POST	| { email, password, first_name, last_name }	| Sign up a new customer	| Email must be unique;  All credentials must be entered
/customer/login	| POST	| { email , password }	| Log in an existing customer; Returns customer first name and token	| 


Employees
Endpoint	| Method |	Body	| Description	| Constraints
----------|--------|--------|-------------|------------
/employees/	| GET |	    | Returns all employees	| Auth level must be between 1-5 to view employees
/employees/:id	| GET |   |	Returns the employee associated with the ID	| Auth level must be between 1-5 to view employee UNLESS Employee is viewing their own profile
/employees/:id |	PUT |	{ first_name, last_name, email, phone_number, username, password }	| Returns the new employee	| Auth level must be between 1-5 to update employee UNLESS Employee is updating their own profile
/employees/:id | DELETE |    | Deletes the employee	| Auth level must be 1 or 2 to delete employee


Customers
Endpoints	| Method |	Body	| Description	| Constraints
----------|--------|--------|-------------|------------
/customers/	| GET |	    | Returns all customers	| Auth level must be between 1-5 to view customers
/customers/:id	| GET |   |	Returns the customer associated with the ID	| Auth level must be between 1-5 to view customer UNLESS Customer is viewing their own profile
/customers/:id |	PUT |	{ first_name, last_name, email, phone_number, password }	| Returns the new customer	| Auth level must be between 1-5 to update customer UNLESS Customer is updating their own profile
/customers/:id | DELETE |    | Deletes the customer	| Auth level must be 1 or 2 to delete customer
