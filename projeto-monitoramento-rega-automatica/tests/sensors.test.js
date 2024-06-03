const request = require('supertest');
const app = require('../app');

describe('Sensor API', () => {
  it('Cria um novo Sensor', async () => {
    const response = await request(app)
      .post('/sensores')
      .send({
        nome: 'DHT11',
        tipo: 'Sensor Humidade do solo'
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.nome).toBe('DHT11');
  });

  it('Verificar todos os Sensores', async () => {
    const response = await request(app).get('/sensores');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Atualizar um Sensor', async () => {
    const response = await request(app)
      .put('/sensores/1')
      .send({
        nome: 'Updated Sensor',
        tipo: 'Updated Tipo'
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.nome).toBe('Updated Sensor');
  });

 it('Deletar um Sensor', async () => {
    const response = await request(app).delete('/sensores/1');
    expect(response.statusCode).toBe(204);
  });

});
