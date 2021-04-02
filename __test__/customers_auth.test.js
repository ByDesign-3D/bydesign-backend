const request = require("supertest");
const server = require("../server");
const db = require('../data/db.config.js');
const faker = require('faker');


// Register endpoint tests
describe('customer register', () =>{
    // beforeEach(async () => {
    //         await db('customers').truncate();
    //     })
    it('should give status code 201 when successful customer register', () =>{
        return request(server)
        .post('/customer/register')
        .send({first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password()})
        .then(response =>{
            expect(response.status)
            .toBe(201)
        })
    });
    it('should return ann error registering new customer because it is just a email.', () =>{
        return request(server)
        .post('/customer/register')
        .send({email:'thisCustomer@fake.com'})
        .then(response =>{
            expect(response.status)
            .toBe(500)
        })
    });
});


describe('customer login', () =>{
    it('should give status code 201 when successful customer register', () =>{
        return request(server)
        .post('/customer/register')
        .send({email: faker.internet.email(), password: faker.internet.password(), first_name: faker.name.firstName(), last_name: faker.name.lastName()})
        .then(response =>{
            expect(response.status)
            .toBe(201)
        })
    });

    it('should give status 401 error for customer login', () =>{
        return request(server)
        .post('/customer/login')
        .send({email:'random@fake.com', password:'afd'})
        .then(res =>{
            expect(res.status)
            .toBe(401)
        })
    })

    it('should return 200 for correct customer login', () =>{
        return request(server)
        .post('/customer/login')
        .send({email:'testuser@fake.com', password:'myPassword'})
        .then(res =>{
            expect(res.status)
            .toBe(200)
        })
    })



})

// describe('customer delete', () =>{
//     it('should return 410 for successful deletion of an customer', () =>{
//         return request(server)
//         .delete('/customers/CUSTOMER ID HERE!!!')
//         .then(res =>{
//             expect(res.status)
//             .toBe(410)
//         })
//     })
// })

// describe('customer update', () =>{
        // it('Should return 200 for successful customer info update (put request)', () => {
    //     let userToken = ""
    //     request(server)
    //     .post('/customer/login')
    //     .send({email:'random@fake.com', password:'myPassword'})
    //     .then(res => {
    //         userToken = res.token
    //     })
    //     .catch()

    //     return request(server)
    //     .put('customer/f233c188-77f5-4610-af4b-8347da778cef')
    //     .send({
    //         first_name:"Virginia", 
    //         last_name:"Wilcox", 
    //         email:faker.internet.email(), 
    //         phone_number:faker.phone.phoneNumber(), 
    //         email:faker.internet.email(), 
    //         password:faker.internet.password()
    //     }, userToken)
    //     .then(res => {
    //         expect(res.status)
    //         .toBe(200)
    //     })
    // })
// })