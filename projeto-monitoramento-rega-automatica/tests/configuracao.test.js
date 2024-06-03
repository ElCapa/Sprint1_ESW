const request = require('supertest');
const app = require('../app');

describe('Configuracao API', () => {
  let sensorId;
  let configuracaoId;

  beforeAll(async () => {
    const sensorResponse = await request(app)
      .post('/sensores')
      .send({
        nome: 'Sensor de Umidade',
        tipo: 'umidade'
      });
    sensorId = sensorResponse.body.id;
  });

  it('deve criar uma nova configuracao', async () => {
    const response = await request(app)
      .post('/configuracoes')
      .send({
        parametro: 'intervalo_irrigacao',
        valor: '30',
        sensorId: sensorId
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.parametro).toBe('intervalo_irrigacao');
    expect(response.body.valor).toBe('30');
    configuracaoId = response.body.id;
  });

  it('deve listar todas as configuracoes', async () => {
    const response = await request(app).get('/configuracoes');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });

  it('deve obter uma configuracao por ID', async () => {
    const response = await request(app).get(`/configuracoes/${configuracaoId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(configuracaoId);
  });

  it('deve atualizar uma configuracao existente', async () => {
    const response = await request(app)
      .put(`/configuracoes/${configuracaoId}`)
      .send({
        parametro: 'intervalo_irrigacao',
        valor: '45',
        sensorId: sensorId
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.valor).toBe('45');
  });

  it('deve excluir uma configuracao existente', async () => {
    const response = await request(app).delete(`/configuracoes/${configuracaoId}`);
    expect(response.statusCode).toBe(204);
  });
});
