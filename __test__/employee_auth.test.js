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