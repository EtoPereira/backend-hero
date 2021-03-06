const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async()=>{
        await connection.destroy();
    })
    it('should be create new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAE",
            email: "emersonneves@outlook.com",
            whatsapp: "55991190985",
            city: "Cruz Alta",
            uf: "RS"
        });
        console.log(response.body);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});