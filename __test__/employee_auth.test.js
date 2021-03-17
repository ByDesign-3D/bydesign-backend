const request = require("supertest");
const server = require("../server");
const db = require('../data/db.config.js');


// Register endpoint tests
describe('employee register', () =>{
    beforeEach(async () => {
            await db('employees').truncate();
        })
    it('should give status code 201 when successful employee register', () =>{
        return request(server)
        .post('/auth/employees/register')
        .send({username: 'random', password:'myPassword'})
        .then(response =>{
            expect(response.status)
            .toBe(201)
        })
    });
    it('should return a 500 on error registering new employee', () =>{
        return request(server)
        .post('/auth/employees/register')
        .send({username:'thisEmployee'})
        .then(response =>{
            expect(response.status)
            .toBe(400)
        })
    });
});



describe('employee login', () =>{
        it('should give status code 201 when successful employee register', () =>{
        return request(server)
        .post('/auth/employees/register')
        .send({username: 'random', password:'myPassword'})
        .then(response =>{
            expect(response.status)
            .toBe(201)
        })
    });
    it('should give status 401 error for employee login', () =>{
        return request(server)
        .post('/auth/employees/login')
        .send({username:'random', password:'afd'})
        .then(res =>{
            expect(res.status)
            .toBe(401)
        })
    })

    it('should return 200 for correct employee login', () =>{
        return request(server)
        .post('/auth/employees/login')
        .send({username:'random', password:'myPassword'})
        .then(res =>{
            expect(res.status)
            .toBe(200)
        })
    })
})