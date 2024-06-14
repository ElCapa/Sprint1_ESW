# Projeto de Monitoramento e Rega Automática

Este é um projeto de monitoramento e rega automática desenvolvido usando Node.js, Express e MongoDB.

## Descrição

Este projeto visa criar uma aplicação para monitorar e controlar o sistema de rega de plantas de forma automática, além de fornecer funcionalidades para gerenciar sensores, configurações de rega e notificações.

## Funcionalidades

- Autenticação de usuários (signup, login, logout)
- CRUD de sensores para monitoramento
- CRUD de configurações de rega
- CRUD de notificações
- Sistema de rega automática com base nas configurações definidas
- Proteção de rotas com autenticação JWT
- Utilização de cookies para gerenciamento de sessão

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens) para autenticação
- bcrypt para hash de senhas
- Mongoose para modelagem de dados MongoDB

## Instalação e Uso

1. Clone este repositório
2. Instale as dependências usando `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`
4. Inicie o servidor com `npm start`
5. Utilize o Postman ou ferramenta similar para testar as rotas API

## Rotas

- `/signup`: Registro de novos usuários
- `/login`: Login de usuários
- `/logout`: Logout de usuários
- `/sensores`: CRUD de sensores
- `/configuracoes`: CRUD de configurações de rega
- `/notificacoes`: CRUD de notificações

## Testando no Postman

Rota: GET /sensores

- Descrição: Obter todos os sensores.
- URL: http://localhost:8000/sensores
- Resposta:
  [
    {
      "id": 1,
      "nome": "DHT11",
      "tipo": "Sensor Humidade do solo",
      "createdAt": "2024-05-20T12:00:00.000Z",
      "updatedAt": "2024-05-20T12:00:00.000Z"
    },
    {
      "id": 2,
      "nome": "LM35",
      "tipo": "Sensor Temperatura",
      "createdAt": "2024-05-20T12:05:00.000Z",
      "updatedAt": "2024-05-20T12:05:00.000Z"
    }
  ]

Rota: POST /sensores

- Descrição: Cria um novo sensor.
- URL: http://localhost:8000/sensores
- Corpo da Requisição:
  {
    "nome": "DHT11",
    "tipo": "Sensor Humidade do solo"
  }
- Resposta:
  {
    "id": 1,
    "nome": "DHT11",
    "tipo": "Sensor Humidade do solo",
    "createdAt": "2024-05-20T12:10:00.000Z",
    "updatedAt": "2024-05-20T12:10:00.000Z"
  }

Rota: DELETE /sensores/:id

- Descrição: Eliminar sensor pelo ID.
- URL: http://localhost:8000/sensores/1
- Resposta:
{
    "message": "Sensor excluído com sucesso"
}

Rota: PUT /sensores/:id

- Descrição: Atualiza um sensor existente pelo ID.
- URL: http://localhost:8000/sensores/1
- Corpo da Requisição:
  {
    "nome": "textUpdate",
    "tipo": "SensortextUpdate"
  }
- Resposta:
  {
    "id": 1,
    "nome": "textUpdate",
    "tipo": "SensortextUpdate",
    "createdAt": "2024-05-20T12:05:00.000Z",
    "updatedAt": "2024-05-20T12:20:00.000Z"
  }

### Configurações

Rota: GET /configuracoes

- Descrição: Obtém a lista de todas as configurações.
- URL: http://localhost:8000/configuracoes
- Resposta:
  [
    {
      "id": 1,
      "parametro": "900",
      "valor": "500",
      "sensorId": 3,
      "createdAt": "2024-05-21T14:19:53.270Z",
      "updatedAt": "2024-05-21T14:19:53.270Z"
    }
  ]

Rota: POST /configuracoes

- Descrição: Cria uma nova configuração.
- URL: http://localhost:8000/configuracoes
- Corpo da Requisição:
  {
    "parametro": "900",
    "valor": "500",
    "sensorId": 3
  }
- Resposta:
  {
    "id": 1,
    "parametro": "900",
    "valor": "500",
    "sensorId": 3,
    "createdAt": "2024-05-21T14:19:53.270Z",
    "updatedAt": "2024-05-21T14:19:53.270Z"
  }

Rota: GET /configuracoes/:id

- Descrição: Obtém uma configuração pelo ID.
- URL: http://localhost:8000/configuracoes/1
- Método HTTP: GET
- Resposta:
  {
    "id": 1,
    "parametro": "900",
    "valor": "500",
    "sensorId": 3,
    "createdAt": "2024-05-21T14:19:53.270Z",
    "updatedAt": "2024-05-21T14:19:53.270Z"
  }

Rota: PUT /configuracoes/:id

- Descrição: Atualiza uma configuração existente pelo ID.
- URL: http://localhost:8000/configuracoes/1
- Corpo da Requisição:
  {
    "parametro": "updated_parametro",
    "valor": "updated_valor",
    "sensorId": 3
  }
- Resposta:
  {
    "id": 1,
    "parametro": "updated_parametro",
    "valor": "updated_valor",
    "sensorId": 3,
    "createdAt": "2024-05-21T14:19:53.270Z",
    "updatedAt": "2024-05-21T14:30:00.000Z"
  }

Rota: DELETE /configuracoes/:id

- Descrição: Exclui uma configuração pelo ID.
- URL: http://localhost:8000/configuracoes/1
- Resposta:


