const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  it('deve criar um novo usuário', async () => {
    const response = await request(app)
      .post('/usuarios')
      .send({
        nome: 'João',
        email: 'joao@example.com',
        senha: '123456'
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.nome).toBe('João');
  });

  it('deve obter todos os usuários', async () => {
    const response = await request(app).get('/usuarios');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('deve atualizar um usuário', async () => {
    const response = await request(app)
      .put('/usuarios/1')
      .send({
        nome: 'Maria',
        email: 'maria@example.com',
        senha: '654321'
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.nome).toBe('Maria');
  });

  it('deve deletar um usuário', async () => {
    const response = await request(app).delete('/usuarios/1');
    expect(response.statusCode).toBe(204);
  });

});