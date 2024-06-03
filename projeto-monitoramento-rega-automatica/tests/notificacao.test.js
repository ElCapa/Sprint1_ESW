const request = require('supertest');
const app = require('../app');

describe('Notificacao API', () => {
  let sensorId;
  let notificacaoId;

  beforeAll(async () => {
    const sensorResponse = await request(app)
      .post('/sensores')
      .send({
        nome: 'Sensor de Umidade',
        tipo: 'umidade'
      });
    sensorId = sensorResponse.body.id;
  });

  it('deve criar uma nova notificacao', async () => {
    const response = await request(app)
      .post('/notificacoes')
      .send({
        type: 'alerta',
        message: 'Umidade baixa detectada',
        dateHora: new Date(),
        sensorId: sensorId
      });
    notificacaoId = response.body.id;
    expect(response.statusCode).toBe(201);
    expect(response.body.type).toBe('alerta');
    expect(response.body.message).toBe('Umidade baixa detectada');
  });

  it('deve listar todas as notificacoes', async () => {
    const response = await request(app).get('/notificacoes');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });

  it('deve atualizar uma notificacao existente', async () => {
    const notificacaoResponse = await request(app)
      .post('/notificacoes')
      .send({
        type: 'aviso',
        message: 'Umidade normalizada',
        dateHora: new Date(),
        sensorId: sensorId
      });
  
    const response = await request(app)
      .put(`/notificacoes/${notificacaoResponse.body.id}`)
      .send({
        type: 'aviso',
        message: 'Umidade normalizada - atualizado',
        dateHora: new Date(),  
        sensorId: sensorId
      });
  
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Umidade normalizada - atualizado');
  });
  

  it('deve excluir uma notificacao existente', async () => {
    const response = await request(app)
      .delete(`/notificacoes/${notificacaoId}`);
    
    expect(response.statusCode).toBe(204);
  });
});
