const request = require("supertest");
const server = require("../server");
const db = require('../data/db.config.js');
const faker = require('faker');


// Register endpoint tests
describe('employee register', () =>{
    // beforeEach(async () => {
    //         await db('employees').truncate();
    //     })
    it('should give status code 201 when successful employee register', () =>{
        return request(server)
        .post('/employee/register')
        .send({username: faker.internet.userName(), password: faker.internet.password(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email()})
        .then(response =>{
            expect(response.status)
            .toBe(201)
        })
    });
    it('should return ann error registering new employee because it is just a username.', () =>{
        return request(server)
        .post('/employee/register')
        .send({username:'thisEmployee'})
        .then(response =>{
            expect(response.status)
            .toBe(500)
        })
    });
});


describe('employee login', () =>{
    it('should give status code 201 when successful employee register', () =>{
        return request(server)
        .post('/employee/register')
        .send({username: faker.internet.userName(), password: faker.internet.password(), first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email()})
        .then(response =>{
            expect(response.status)
            .toBe(201)
        })
    });

    it('should give status 401 error for employee login', () =>{
        return request(server)
        .post('/employee/login')
        .send({username:'random', password:'afd'})
        .then(res =>{
            expect(res.status)
            .toBe(401)
        })
    })

    it('should return 200 for correct employee login', () =>{
        return request(server)
        .post('/employee/login')
        .send({username:'random', password:'myPassword'})
        .then(res =>{
            expect(res.status)
            .toBe(200)
        })
    })



})

// describe('employee delete', () =>{
//     it('should return 410 for successful deletion of an employee', () =>{
//         return request(server)
//         .delete('/employees/ec362e67-41f9-415a-b452-0ee9df21043a')
//         .then(res =>{
//             expect(res.status)
//             .toBe(410)
//         })
//     })
// })

// describe('employee update', () =>{
        // it('Should return 200 for successful employee info update (put request)', () => {
    //     let userToken = ""
    //     request(server)
    //     .post('/employee/login')
    //     .send({username:'random', password:'myPassword'})
    //     .then(res => {
    //         userToken = res.token
    //     })
    //     .catch()

    //     return request(server)
    //     .put('employee/f233c188-77f5-4610-af4b-8347da778cef')
    //     .send({
    //         first_name:"Virginia", 
    //         last_name:"Wilcox", 
    //         email:faker.internet.email(), 
    //         phone_number:faker.phone.phoneNumber(), 
    //         username:faker.internet.userName(), 
    //         password:faker.internet.password()
    //     }, userToken)
    //     .then(res => {
    //         expect(res.status)
    //         .toBe(200)
    //     })
    // })
// })