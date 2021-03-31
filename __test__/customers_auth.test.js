// const request = require("supertest");
// const server = require("../server");
// const db = require('../data/db.config.js');


// // Register endpoint tests
// describe('customer register', () =>{
//     beforeEach(async () => {
//             await db('customers').truncate();
//         })
//     it('should give status code 201 when successful customer register', () =>{
//         return request(server)
//         .post('/auth/customers/register')
//         .send({username: 'random', password:'myPassword'})
//         .then(response =>{
//             expect(response.status)
//             .toBe(201)
//         })
//     });
//     it('should return a 500 on error registering new customer', () =>{
//         return request(server)
//         .post('/auth/customers/register')
//         .send({username:'thiscustomer'})
//         .then(response =>{
//             expect(response.status)
//             .toBe(400)
//         })
//     });
// });



// describe('customer login', () =>{
//         it('should give status code 201 when successful customer register', () =>{
//         return request(server)
//         .post('/auth/customers/register')
//         .send({username: 'random', password:'myPassword'})
//         .then(response =>{
//             expect(response.status)
//             .toBe(201)
//         })
//     });
//     it('should give status 401 error for customer login', () =>{
//         return request(server)
//         .post('/auth/customers/login')
//         .send({username:'random', password:'afd'})
//         .then(res =>{
//             expect(res.status)
//             .toBe(401)
//         })
//     })

//     it('should return 200 for correct customer login', () =>{
//         return request(server)
//         .post('/auth/customers/login')
//         .send({username:'random', password:'myPassword'})
//         .then(res =>{
//             expect(res.status)
//             .toBe(200)
//         })
//     })
// })